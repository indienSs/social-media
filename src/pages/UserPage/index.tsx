import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { usersSelector } from "../../redux/userReducer/selectors";

import styles from "./UserPage.module.scss";

const UserPage: FC = () => {
  const { id } = useParams();

  const users = useSelector(usersSelector);

  const chosenUser = users.find((user) => user.id === id);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pagesCount: number = Math.ceil(users.length / 3);

  const pageUsers = users
    .slice(currentPage, currentPage + 4)
    .filter((user) => user.id !== id);

  return (
    <div className={styles.user_page}>
      <div className={styles.user_info}>
        <img
          src={chosenUser?.imgUrl}
          alt="photo"
          height={500}
          width={350}
          className={styles.profile_photo}
        />
        <div className={styles.user_name}>
          <h3>
            {chosenUser?.name} {chosenUser?.secondName}
          </h3>
          <p>{chosenUser?.title}</p>
          <div className={styles.another_users}>
            <h3>Другие пользователи:</h3>
            <div className={styles.users_cards}>
              <button
                disabled={currentPage === 0 ? true : false}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >{`<`}</button>
              {pageUsers.map((user) => (
                <UserCard key={user.id} {...user} />
              ))}
              <button
                disabled={currentPage === pagesCount ? true : false}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >{`>`}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

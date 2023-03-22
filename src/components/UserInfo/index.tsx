import { FC, useState } from "react";
import { User } from "../../types/userType";
import UserCard from "../UserCard";
import noimage from "../../assets/img/noimage.jpeg";

import styles from "./UserInfo.module.scss";

interface IUserInfo {
  chosenUser: User;
  users: User[];
  id: string;
}

const UserInfo: FC<IUserInfo> = ({ chosenUser, users, id }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pagesCount: number = Math.floor(users.length / 3);
  const pageUsers = users
    .filter((user) => user.id !== id)
    .slice(currentPage * 3, currentPage * 3 + 3);
  return (
    <div className={styles.user_info}>
      <img
        src={chosenUser.imgUrl || noimage}
        alt="photo"
        height={500}
        width={350}
        className={styles.profile_photo}
      />

      <div className={styles.user_name}>
        <h3>
          {chosenUser.name} {chosenUser.secondName}
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
              disabled={currentPage === pagesCount - 1 ? true : false}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >{`>`}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

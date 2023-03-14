import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { usersSelector } from "../../redux/userReducer/selectors";

import styles from "./UserPage.module.scss";

const UserPage: FC = () => {
  const { id } = useParams();

  const users = useSelector(usersSelector);

  const chosenUser = users.find((user) => user.id === id);

  return (
    <div className={styles.user_page}>
      <img src={chosenUser?.imgUrl} alt="photo" height={500} />
      <div>
        <h3>
          {chosenUser?.name} {chosenUser?.secondName}
        </h3>
        <p>{chosenUser?.title}</p>
      </div>
    </div>
  );
};

export default UserPage;

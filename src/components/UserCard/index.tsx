import { FC } from "react";
import { User } from "../../types/userType";

import styles from "./UserCard.module.scss";

const UserCard: FC<User> = (user) => {
  return (
    <div className={styles.user_card}>
      <img src={user.imgUrl} alt="user-image" width={150} height={180} />
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;

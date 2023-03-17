import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../../types/userType";
import noimage from "../../assets/img/noimage.jpeg";

import styles from "./UserCard.module.scss";

const UserCard: FC<User> = (user) => {
  return (
    <div className={styles.user_card}>
      <Link to={`/${user.id}`}>
        <img
          src={user.imgUrl || noimage}
          alt="user-image"
          width={150}
          height={180}
        />
        <p>{user.name}</p>
      </Link>
    </div>
  );
};

export default UserCard;

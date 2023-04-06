import { FC } from "react";
import { statusSelector, usersSelector } from "../../redux/slices/users";
import { useSelector } from "react-redux";

import styles from "./MainUsers.module.scss";
import UserCard from "../UserCard/UserCard";
import UserCardLoader from "../UserCard/UserCardLoader";

const MainUsers: FC = () => {
  const users = useSelector(usersSelector);
  const status = useSelector(statusSelector);

  return (
    <div className={styles.main_users}>
      <div>
        <h3>Пользователи:</h3>
        <div className={styles.users_cards}>
          {status === "loading"
            ? [...new Array(8)].map((_, index) => (
                <UserCardLoader key={index} />
              ))
            : users.map((user) => <UserCard key={user.id} {...user} />)}
        </div>
      </div>
    </div>
  );
};

export default MainUsers;

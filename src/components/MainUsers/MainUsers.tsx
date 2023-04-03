import { FC } from "react";
import { usersSelector } from "../../redux/slices/users";
import { useSelector } from "react-redux";

import styles from "./MainUsers.module.scss";
import UserCard from "../UserCard/UserCard";

const MainUsers: FC = () => {
  const users = useSelector(usersSelector);

  return (
    <div className={styles.main_users}>
      <div>
        <h3>Пользователи:</h3>
        <div className={styles.users_cards}>
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainUsers;

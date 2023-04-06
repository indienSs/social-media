import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { statusSelector, usersSelector } from "../../redux/slices/users";

import styles from "./UserPage.module.scss";
import CommentSection from "../../components/CommentSection/CommentSection";
import UserInfo from "../../components/UserInfo/UserInfo";

const UserPage: FC = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);
  const status = useSelector(statusSelector);

  if (!id || status === "error") {
    return <div>Пользователь не найден</div>;
  }

  const chosenUser = users.find((user) => user.id === id);

  if (!chosenUser) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div className={styles.user_page}>
      <UserInfo users={users} chosenUser={chosenUser} id={id} />
      <CommentSection {...chosenUser} />
    </div>
  );
};

export default UserPage;

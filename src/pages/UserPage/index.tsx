import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { usersSelector } from "../../redux/userReducer/selectors";
import Comment from "../../components/Comment";

import styles from "./UserPage.module.scss";
import { setComment } from "../../redux/userReducer/slice";

const UserPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);
  const chosenUser = users.find((user) => user.id === id);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pagesCount: number = Math.ceil(users.length / 4);
  const pageUsers = users
    .slice(currentPage, currentPage + 4)
    .filter((user) => user.id !== id);

  const [newComment, setNewComment] = useState<string>("");
  const changeNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };
  const submitCommentsForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSendComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (chosenUser)
      dispatch(setComment({ id: chosenUser?.id, comment: newComment }));
    setNewComment("");
  };

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
      <div className={styles.user_comments}>
        <div className={styles.write_comment}>
          <h3>Написать комментарий</h3>
          <form onSubmit={submitCommentsForm}>
            <textarea
              cols={30}
              rows={10}
              value={newComment}
              onChange={changeNewComment}
            ></textarea>
            <button
              disabled={newComment.length > 80 ? true : false}
              onClick={handleSendComment}
            >
              Отправить комментарий
            </button>
          </form>
        </div>
        <div className={styles.all_comments}>
          <h4 className={styles.comments_counter}>
            Комментирии ({chosenUser?.comments.length})
          </h4>
          <div className={styles.comments_list}>
            {chosenUser?.comments.map((comment, index) => (
              <Comment key={comment} index={index} text={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
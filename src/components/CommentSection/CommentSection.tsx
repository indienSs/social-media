import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../assets/axios";
import { setComment } from "../../redux/slices/users";
import { User } from "../../types/userType";
import Comment from "../Comment/Comment";

import styles from "./CommentSection.module.scss";

const CommentsSection: FC<User> = (chosenUser) => {
  const [newComment, setNewComment] = useState<string>("");
  const dispatch = useDispatch();
  const userUrl = `/${chosenUser.id}`;

  const changeNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };
  const submitCommentsForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const sendCommentToApi = async () => {
    try {
      axios.put(userUrl, { comments: [...chosenUser.comments, newComment] });
      console.log("Успешно добавлен комментарий");
    } catch (error) {
      console.log(error);
      alert("Не удалось добавить комментарий");
    }
  };

  const handleSendComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (chosenUser && newComment.length > 0) {
      dispatch(setComment({ id: chosenUser.id, comment: newComment }));
      sendCommentToApi();
    }

    setNewComment("");
  };

  return (
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
          Комментирии ({chosenUser.comments.length})
        </h4>
        <div className={styles.comments_list}>
          {chosenUser.comments.map((comment, index) => (
            <Comment key={comment} index={index} text={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;

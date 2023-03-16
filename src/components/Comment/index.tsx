import { FC } from "react";

import styles from "./Comment.module.scss";

interface IComment {
  index: number;
  text: string;
}

const Comment: FC<IComment> = ({ index, text }) => {
  return (
    <div className={styles.comment}>
      <h4>#{index + 1}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Comment;

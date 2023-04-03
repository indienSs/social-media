import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h3>VReacte</h3>
      </Link>
    </div>
  );
};

export default Header;

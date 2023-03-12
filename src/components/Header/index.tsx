import { FC } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <h3>VReacte</h3>
    </div>
  );
};

export default Header;

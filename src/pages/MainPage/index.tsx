import { FC } from "react";

import MainAddUser from "../../components/MainAddUser";
import MainUsers from "../../components/MainUsers";

import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
  return (
    <div className={styles.main_page}>
      <MainUsers />
      <MainAddUser />
    </div>
  );
};

export default MainPage;

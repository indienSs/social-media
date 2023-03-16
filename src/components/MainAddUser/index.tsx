import React, { FC, useState } from "react";
import axios from "axios";

import { User } from "../../types/userType";

import styles from "./MainAddUser.module.scss";

const MainAddUser: FC = () => {
  const [userData, setUserData] = useState<User>({
    id: "",
    imgUrl: "",
    name: "",
    secondName: "",
    title: "",
    comments: [],
  });

  const isReadyToAdd: boolean =
    userData.name.length > 0 &&
    userData.secondName.length > 0 &&
    userData.imgUrl.length > 0 &&
    userData.title.length > 0;

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className={styles.form_add}>
      <h3>Внести нового пользователя в базу:</h3>
      <form onSubmit={onSubmitForm} className={styles.input_form}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={userData.name}
          name="name"
          onChange={onChangeForm}
        />
        <input
          type="text"
          placeholder="Фамилия пользователя"
          value={userData.secondName}
          name="secondName"
          onChange={onChangeForm}
        />
        <input
          type="text"
          placeholder="URL фотографии"
          value={userData.imgUrl}
          name="imgUrl"
          onChange={onChangeForm}
        />
        <input
          type="text"
          placeholder="Статус пользователя"
          value={userData.title}
          name="title"
          onChange={onChangeForm}
        />
        <button disabled={!isReadyToAdd}>Зарегистрировать</button>
      </form>
    </div>
  );
};

export default MainAddUser;

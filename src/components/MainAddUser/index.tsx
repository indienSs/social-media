import React, { FC, useState } from "react";

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
        <button>Зарегистрировать</button>
      </form>
    </div>
  );
};

export default MainAddUser;

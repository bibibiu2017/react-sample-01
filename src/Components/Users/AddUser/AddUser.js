import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/Modal/ErrorModal/ErrorModal";
import { input } from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const [form, setForm] = useState(formInit);
  const [error, setError] = useState(errorInit);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!form.username) {
      setError({
        title: "Invalid Username",
        message: "Username cannot be blank",
      });
      return;
    }

    if (!form.age) {
      setError({ title: "Invalid Age", message: "Age cannot be blank" });
      return;
    }

    if (+form.age < 1) {
      setError({ title: "Invalid Age", message: "Age must be greater than 1" });
      return;
    }

    onAddUser(form);
    setForm(formInit);
    setError(errorInit);
  };

  const inputChangeHandler = (e) => {
    const input = e.target.id;
    const value = e.target.value.trim();
    setForm((form) => ({
      ...form,
      [input]: value,
    }));
  };

  const modalClosedHandler = () => {
    setError(errorInit);
  };

  return (
    <>
      <ErrorModal
        show={error.title}
        title={error.title}
        message={error.message}
        onModalClosed={modalClosedHandler}
      />
      <Card className={input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor={"username"}>Username</label>
          <input
            id={"username"}
            type="text"
            value={form.username}
            onChange={(e) => inputChangeHandler(e)}
          />
          <label htmlFor={"age"}>Age(Years)</label>
          <input
            id={"age"}
            type="number"
            value={form.age}
            onChange={(e) => inputChangeHandler(e)}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

const formInit = {
  username: "",
  age: "",
};

const errorInit = {
  title: "",
  message: "",
};

export default AddUser;

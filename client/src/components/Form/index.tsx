import React, { FC, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import "./styles.css";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <Input name="email" label="E-mail" />
      <Input name="password" label="Password" type='password' />
      <Button>Login</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Form;

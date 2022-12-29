import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../../store/actions/auth";
import { authLoadingSelector } from "../../store/selectors/auth";
import Input from "../Input";
import Button from "../Button";
import "./styles.css";
import { Spinner } from "../Spinner";

const Form: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loading = useSelector(authLoadingSelector);
  const isEmptyForm = !email || !password;

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitToLogin = () => {
    dispatch(loginAction.request({ email, password }));
  };

  const submitToSignUp = () => {
    dispatch(registerAction.request({ email, password }));
  };

  return (
    <div className="form-container">
      <Input
        onChange={handleChangeEmail}
        value={email}
        name="email"
        label="E-mail"
        disabled={loading}
      />
      <Input
        onChange={handleChangePassword}
        value={password}
        name="password"
        label="Password"
        type="password"
        disabled={loading}
      />
      <Button
        title="Login"
        onClick={submitToLogin}
        disabled={isEmptyForm || loading}
      />
      <Button
        title="Sign Up"
        outlined
        onClick={submitToSignUp}
        disabled={isEmptyForm || loading}
      />
      {loading && <Spinner />}
    </div>
  );
};

export default Form;

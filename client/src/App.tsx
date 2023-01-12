import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUserSelector,
  isAuthSelector,
  loginErrorSelector,
  signUpErrorSelector,
} from "./store/selectors/auth";
import Form from "./components/Form";
import Button from "./components/Button";
import { logoutAction } from "./store/actions/auth";
import { User } from "./models/User";
import UserService from "./services/UserService";

export const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const isAuth = useSelector(isAuthSelector);
  const user = useSelector(currentUserSelector);
  const loginError = useSelector(loginErrorSelector);
  const registerError = useSelector(signUpErrorSelector);

  const dispatch = useDispatch();

  const handleGetUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch(logoutAction.request());
  };

  return (
    <div className="app">
      <h1>{isAuth ? `Authenticated with ${user.email}` : "Not recognized"}</h1>
      {loginError && <p className="errorText">{loginError}</p>}
      {registerError && <p className="errorText">{registerError}</p>}
      {!isAuth ? (
        <Form />
      ) : (
        <>
          <Button title="log out" onClick={logout} />
          <Button outlined title="fetch users" onClick={handleGetUsers} />
          {users.map((user) => (
            <div>{user.email}</div>
          ))}
        </>
      )}
    </div>
  );
};

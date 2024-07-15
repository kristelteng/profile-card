import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setBgColor } from "./actions";
import UserProfile from "./components/UserProfile/UserProfile";
import Pagination from "./components/Pagination/Pagination";
import ColorPicker from "./components/ColorPicker/ColorPicker";

import crownLogo from "../../profile-card/src/assets/crown.svg";
import "./App.css";
import "./variables.css";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentPage = useSelector((state) => state.currentPage);
  const bgColor = useSelector((state) => state.bgColor);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const usersPerPage = useSelector((state) => state.usersPerPage);

  useEffect(() => {
    dispatch(fetchUsers(currentPage, usersPerPage));
  }, [dispatch, currentPage, usersPerPage]);

  const handleBgColorChange = (color) => {
    dispatch(setBgColor(color));
    localStorage.setItem("bgColor", color);
  };

  return (
    <div className="App">
      <h1>
        <img className="crown-logo" src={crownLogo} alt="crown logo" /> My
        Profiles
      </h1>

      <ColorPicker color={bgColor} onColorChange={handleBgColorChange} />
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error {error} </p>
      ) : (
        <div className="user-profiles">
          {users.map((user) => (
            <UserProfile key={user.login.uuid} user={user} bgColor={bgColor} />
          ))}
        </div>
      )}
      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default App;
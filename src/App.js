import React, { useEffect } from "react";
import "./styles/App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Login from "./components/auth/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { useStateValue } from "./store/StateProvider";
import Widgets from "./components/widgets/Widgets";
import { storageService } from "./services/localStorage";
import { actionTypes } from "./store/reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const storedUser = storageService.getUser();
    if (storedUser) {
      dispatch({
        type: actionTypes.SET_USER,
        user: storedUser,
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

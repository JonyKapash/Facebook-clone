import { Button } from "@material-ui/core";
import React, { useCallback } from "react";
import "./Login.css";
import { actionTypes } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import { storageService } from "../../services/localStorage";

function Login() {
  const [, dispatch] = useStateValue();

  const signIn = useCallback(() => {
    // Mock user data
    const mockUser = {
      displayName: "Demo User",
      photoURL: "https://avatar.placeholder.com/150",
      email: "demo@example.com",
      uid: Date.now().toString(),
    };

    // Save user to localStorage
    storageService.setUser(mockUser);

    // Update global state
    dispatch({
      type: actionTypes.SET_USER,
      user: mockUser,
    });
  }, [dispatch]);

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook logo text"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default React.memo(Login);

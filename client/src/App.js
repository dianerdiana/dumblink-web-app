import React, { useContext, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Template from "./pages/Template";
import CreateLink from "./pages/CreateLink";
import Profile from "./pages/Profile";
import MyLinks from "./pages/MyLinks";
import Index from "./pages/Index";

import { useNavigate } from "react-router-dom";

// Get API config & setAuthToken
import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  // Init user context here ...
  const [state, dispatch] = useContext(UserContext);
  // console.log(state);

  // Redirect Auth here ...
  useEffect(() => {
    if (state.isLogin == true) {
      navigate("/template");
    }
  }, [state]);

  // Create function for check user token here ...
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/:uniqueLink" element={<Index />} />
      <Route exact path="/template" element={<Template />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/my-link" element={<MyLinks />} />
      <Route exact path="/create-link/:template" element={<CreateLink />} />
    </Routes>
  );
}

export default App;

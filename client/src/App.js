import React from "react";

import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Template from "./pages/Template";
import CreateLink from "./pages/CreateLink";
import Profile from "./pages/Profile";
import MyLinks from "./pages/MyLinks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Template />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/my-link" element={<MyLinks />} />
      <Route exact path="/choose-template" element={<CreateLink />} />
    </Routes>
  );
}

export default App;

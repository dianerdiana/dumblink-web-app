import React, { useContext } from "react";

import { Col, Image, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";

export default ({ templateItem, profileItem, myLinkItem }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <Col
      md={3}
      className="d-flex flex-column align-items-center position-relative"
    >
      <Link to="/template" className="w-50 py-3 ov-hidden">
        <Image src="/assets/icons/navbar-brand.svg" />
      </Link>
      <div className="w-75 position-relative">
        <div>{templateItem}</div>
        <div>{profileItem}</div>
        <div>{myLinkItem}</div>
      </div>
      <div className="mt-auto w-75 mb-5 position absolute bottom-0">
        <Button
          onClick={logout}
          className="w-100 mb-5 p-0 text-start"
          variant="transparent"
        >
          <Image src="/assets/icons/logout.png" className="nav-icon" />
          <span className="ms-3 text-dark h5">Logout</span>
        </Button>
      </div>
    </Col>
  );
};

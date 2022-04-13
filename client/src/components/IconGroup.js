import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TemplateActive = () => {
  return (
    <Link to="/template" className="w-100 my-5 d-flex align-items-center">
      <Image src="/assets/icons/template-icon.svg" className="nav-icon" />
      <span className="ms-3 text-warning h5 mt-2">Template</span>
    </Link>
  );
};

export const TemplateInactive = () => {
  return (
    <Link to="/template" className="w-100 my-5 d-flex align-items-center">
      <Image src="/assets/icons/template-inactive.svg" className="nav-icon" />
      <span className="ms-3 text-dark h5 mt-2">Template</span>
    </Link>
  );
};

export const ProfileActive = () => {
  return (
    <Link to="/profile" className="w-75 mb-5 d-flex align-items-center">
      <Image src="/assets/icons/profile-active.png" className="nav-icon" />
      <span className="ms-3 text-warning h5 mt-2">Profile</span>
    </Link>
  );
};

export const ProfileInactive = () => {
  return (
    <Link to="/profile" className="w-75 mb-5 d-flex align-items-center">
      <Image src="/assets/icons/profile-inactive.png" className="nav-icon" />
      <span className="ms-3 text-dark h5 mt-2">Profile</span>
    </Link>
  );
};

export const MyLinkActive = () => {
  return (
    <Link to="/my-link" className="w-75 mb-5 d-flex align-items-center">
      <Image src="/assets/icons/my-link-active.png" className="nav-icon" />
      <span className="ms-3 text-warning h5">My Link</span>
    </Link>
  );
};

export const MyLinkInactive = () => {
  return (
    <Link to="/my-link" className="w-75 mb-5 d-flex align-items-center">
      <Image src="/assets/icons/my-link-inactive.png" className="nav-icon" />
      <span className="ms-3 text-dark h5">My Link</span>
    </Link>
  );
};

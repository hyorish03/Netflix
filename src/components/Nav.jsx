import { useState } from "react";
import "./Nav.css";
import { useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("window scrollY: ", window.scrollY);
      if (window.scrollY > 50) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div style={{ height: "110vh", width: "100%" }}>
      <nav className={`nav ${show && "nav_black"}`}>
        <img
          alt="Netflix Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="nav_logo"
          onClick={() => window.location.reload()}
        />
        <img
          alt="User Avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="nav_avatar"
        />
      </nav>
    </div>
  );
}

export default Nav;

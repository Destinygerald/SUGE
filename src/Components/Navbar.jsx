import "./style.css";
import "./style.mobile.css";
import "./style.1600.css";
import { useLayoutEffect, useState } from "react";
import Logo from "/images/SUGE BLACK.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { PrimaryButton } from "./Buttons.jsx";

function NavItem({ nav, clickHandler, route, route2 }) {
  const { pathname } = useLocation();

  function handleStyling() {
    if (pathname == route) return "nav-active";
    if (pathname == route2) return "nav-active";

    if (route == "/services" && pathname.includes("/services"))
      return "nav-active";

    return "";
  }

  function indicator() {
    if (pathname == route) return <div className="nav-indicator" />;

    if (route == "/services" && pathname.includes("/services"))
      return <div className="nav-indicator" />;

    return "";
  }

  return (
    <div>
      <a
        className={handleStyling()}
        href="#"
        onClick={(e) => clickHandler(e, route)}
      >
        {nav}
      </a>
      {indicator()}
    </div>
  );
}

export function Navbar({ openSlider }) {
  const [theme, setTheme] = useState(localStorage.getItem("suge-dark-theme"));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function clickHandler(e, arg) {
    e.preventDefault();
    navigate(arg);
  }

  function getQuote() {
    navigate("/quote");
  }

  function toggleTheme() {
    if (localStorage.getItem("suge-dark-theme") == "true") {
      localStorage.setItem("suge-dark-theme", false);
      document.querySelector(".app").classList.add("light-theme");
    } else {
      localStorage.setItem("suge-dark-theme", true);
      document.querySelector(".app").classList.remove("light-theme");
    }

    setTheme(localStorage.getItem("suge-dark-theme"));
  }

  function backHome() {
    if (pathname.includes("admin")) return;
    navigate("/");
  }

  function startSearch() {
    navigate({
      pathname: pathname,
      search: createSearchParams({
        search: "",
      }).toString(),
    });
  }

  useLayoutEffect(() => {
    if (localStorage.getItem("suge-dark-theme") == "true") {
      document.querySelector(".app").classList.remove("light-theme");
    } else {
      document.querySelector(".app").classList.add("light-theme");
    }
  }, [localStorage.getItem("suge-dark-theme")]);

  return (
    <div className="navbar">
      <div className="logo" onClick={backHome}>
        {" "}
        <img src={Logo} alt="suge-logo" />{" "}
      </div>

      <div className="nav-items">
        <NavItem nav="Home" route="/" clickHandler={clickHandler} />
        <NavItem nav="About Us" route="/about" clickHandler={clickHandler} />
        <NavItem
          nav="Services"
          route="/services"
          route2="/services/2"
          clickHandler={clickHandler}
        />
        <NavItem
          nav="Sustainability"
          route="/sustainability"
          clickHandler={clickHandler}
        />
        <NavItem
          nav="Contact Us"
          route="/contact"
          route2="/contact/2"
          clickHandler={clickHandler}
        />
      </div>

      <div className="nav-extras">
        <span className="theme-switch" onClick={toggleTheme}>
          {theme == "false" || !localStorage.getItem("suge-dark-theme") ? (
            <IoMoonOutline />
          ) : (
            <IoMdMoon />
          )}
        </span>
        <span className="nav-mobile-menu" onClick={openSlider}>
          {" "}
          <AiOutlineMenu />{" "}
        </span>
        <span className="nav-search" onClick={startSearch}>
          {" "}
          <CiSearch />{" "}
        </span>
        <PrimaryButton text="Get a Quote" hasIcon={false} action={getQuote} />
      </div>
    </div>
  );
}

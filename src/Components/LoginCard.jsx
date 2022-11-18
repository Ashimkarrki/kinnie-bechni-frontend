import { useState } from "react";
import axios from "axios";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
const LoginCard = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const changeHandeler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <form
      className="register "
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .post("http://localhost/api/login", userInfo)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }}
    >
      <h3 className="register__child">Log In</h3>
      <div className="icon-wrapper">
        <MdOutlineAlternateEmail className="register__icons" />
        <input
          placeholder="Email"
          type="email"
          required
          onChange={changeHandeler}
          name="email"
          className="register__child register__child--box"
        />
      </div>

      <div className="icon-wrapper">
        <AiOutlineLock className="register__icons" />
        <input
          type="password"
          required
          name="password"
          onChange={changeHandeler}
          className="register__child register__child--box"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="register__child 
        register__child--box"
      >
        Log In
      </button>
      <p className="register__child register__child--align-center">
        or Log in with google
      </p>
      <button className="register__child register__child--box">Google</button>
      <p className="register__child register__child--align-center">
        Not Registerd Yet ?{" "}
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginCard;

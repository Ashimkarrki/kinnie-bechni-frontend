import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupCard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    college: "",
    email: "",
    password: "",
    confirm_password: "",
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
          .post("http://localhost/api/signup", userInfo)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }}
    >
      <h3 className="register__child">Sign Up</h3>
      <div className="icon-wrapper">
        <CgProfile className="register__icons" />

        <input
          placeholder="Full Name"
          type="text"
          name="name"
          required
          onChange={changeHandeler}
          className="register__child register__child--box"
        />
      </div>
      <div className="icon-wrapper">
        <IoSchoolOutline className="register__icons" />

        {/* <input
            placeholder="Collage Name"
            type="text"
            required
            className="register__child register__child--box"
          /> */}
        <select
          name="college"
          onChange={changeHandeler}
          className="register__child register__child--box register__child--select"
          id="collage_name"
        >
          <option value="" defaultValue className="select__option--grey">
            Collage Name
          </option>
          <option value="wrc">Western Regional Collage (WRC)</option>
          <option value="erc">Eastern Regional Collage (ERC)</option>
          <option value="pulchowk">Pulchowk</option>
          <option value="thapathali">Thapathali</option>
        </select>
      </div>
      {/* <div className="icon-wrapper">
          <IoLocationOutline className="register__icons" />

          <input
            placeholder="Collage Address"
            type="text"
            required
            className="register__child register__child--box"
          />
        </div> */}

      <div className="icon-wrapper">
        <MdOutlineAlternateEmail className="register__icons" />
        <input
          placeholder="Email"
          type="email"
          name="email"
          required
          onChange={changeHandeler}
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
      <div className="icon-wrapper">
        <AiOutlineLock className="register__icons" />

        <input
          type="password"
          required
          name="confirm_password"
          onChange={changeHandeler}
          placeholder="Confirm Password"
          className="register__child register__child--box"
        />
      </div>
      <button
        type="submit"
        className="register__child 
        register__child--box"
      >
        Sign Up
      </button>
      <p className="register__child register__child--align-center">
        or sign in with google
      </p>
      <button className="register__child register__child--box">Google</button>
      <p className="register__child register__child--align-center">
        Already a member ?
        <Link className="link" to="/login">
          Log In
        </Link>
      </p>
    </form>
  );
};

export default SignupCard;

import React, { Component } from "react";
import loginlogo from "../assets/images/loginlogo.png";
import joystick from "../assets/images/joystick.png";
import google from "../assets/images/google.svg";
import github from "../assets/images/github.png";
import twitter from "../assets/images/twitter.svg";
import linked from "../assets/images/linked.png";
import Button from "../components/Button";

const initialData = {
  email: "info@devameer.com",
  password: "devameer@123",
};

const defaults = {
  email: "",
  password: "",
};

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    myData: initialData,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      myData: {
        email: prevState.email,
        password: prevState.password,
      },
      ...defaults,
    }));
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <div className="login">
        <div className="login_desc">
          <img src={loginlogo} alt="loginlogo" className="loginlogo" />

          <div className="symbol_login">،،</div>
          <p className="game_desc_login">
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>
          <div className="gamer_login">Hideo Kojima</div>
          <img src={joystick} alt="joystick" className="joystick" />
        </div>

        <form className="login_form pt-30" onSubmit={this.handleSubmit}>
          <div className="login_title">
            <h3 className="form_login_title">Join the game!</h3>
            <p className="form_login_desc">
              Go inside the best gamers social network!
            </p>
          </div>
          <div className="social-login-links">
            <a href="/#">
              <img src={google} alt="google" className="gooogle" />
            </a>
            <a href="/#">
              <img src={twitter} alt="tweitter" className="tweitter" />
            </a>
            <a href="/#">
              <img src={linked} alt="linked" className="linked" />
            </a>
            <a href="/#">
              <img src={github} alt="github" className="github" />
            </a>
          </div>

          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Write your email"
              onChange={this.handleChangeInput}
              value={this.state.email}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Enter your password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="•••••••••"
              onChange={this.handleChangeInput}
              value={this.state.password}
              required
            />
          </div>

          <Button myBtn={"Login"} />
          <div className="reg_anchor">
            Don’t have an account? 
            <a href="/#" onClick={this.props.toggle}>
              Register
            </a>
          </div>
        </form>
      </div>
    );
  }
}

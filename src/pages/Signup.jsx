import React, { Component } from "react";
import gamelogo from "../assets/images/gamelogo.png";
import google from "../assets/images/google.svg";
import bg from "../assets/images/bg.png";
import Button from "../components/Button";

const defaults = {
  email: "",
  password: "",
  confirmpass: "",
  checked: false,
};

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmpass: "",
    checked: false,
    error: "",
    message: "",
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    const checked = e.target.checked;

    this.setState({ [id]: value, checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.confirmpass) {
      this.setState({
        ...defaults,
      });
    } else {
      this.setState({ error: "Your password is not match!" });
    }
  };

  passwordStrength = (e) => {
    const password = e.target.value;
    if (
      !password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      )
    ) {
      this.setState({
        message: `<div class='danger'>your passward is not a good</div>`,
      });
    } else {
      this.setState({
        message: `<div class='success'>your passward is good</div>`,
      });
    }
  };

  ConfirmPassCheck = (e) => {
    if (this.state.password !== this.state.confirmpass) {
      this.setState({ error: "Your password is not match!" });
    }else{
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="sign_up">
        <div className="sign_desc">
          <img src={bg} alt="bg" className="bg" />
          <div className="overlay"></div>

          <img src={gamelogo} alt="game_logo" className="game_logo" />
          <div className="symbol">،،</div>
          <p className="game_desc">
            I always observe the people who pass by when I ride an escalator.
            I'll never see most of them again, so I imagine a lot of things
            about their lives... about the day ahead of them.
          </p>
          <div className="gamer">Hideo Kojima</div>
          <div className="vector"></div>
        </div>
        <a href="/#" className="back" onClick={this.props.toggle}>
          &lt; back
        </a>
        <form className="sign_form pt-30" onSubmit={this.handleSubmit}>
          <div className="sign_title">
            <h3 className="form_sign_title">Register Individual Account!</h3>
            <p className="form_sign_desc">
              For the purpose of gamers regulation, your details are required.
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address*</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter email address"
              onChange={this.handleChangeInput}
              value={this.state.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Create password*</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleChangeInput}
              value={this.state.password}
              onKeyUp={this.passwordStrength}
              autoComplete="off"
              required
            />
            {this.state.message && (
              <div
                dangerouslySetInnerHTML={{ __html: this.state.message }}
              ></div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirmpass">Repeat password*</label>
            <input
              id="confirmpass"
              type="password"
              className="form-control"
              placeholder="Repeat password"
              autoComplete="off"
              onChange={this.handleChangeInput}
              value={this.state.confirmpass}
              onBlur={this.ConfirmPassCheck}
              required
            />
            {this.state.error && <p className="error">{this.state.error}</p>}
          </div>

          <div>
            <div className="form-group">
              <input
                type="checkbox"
                id="checked"
                checked={this.state.checked}
                onChange={this.handleChangeInput}
                name="checked"
                required
              />
              <label htmlFor="repeatpassword*" className="label">
                I agree to terms & conditions
              </label>
            </div>
          </div>
          <Button myBtn={"Register Account"} />
          <div className="or">Or</div>
          <div className="go_to_login" onClick={this.props.toggle}>
            <img src={google} alt="google" className="google" />

            <button className="login_button" type="button">
              login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

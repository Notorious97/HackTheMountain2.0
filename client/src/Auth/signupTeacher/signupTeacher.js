import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import img from "./undraw_unlock_24mb.svg";
import "./signup.css";
import Axios from "axios";
import { localsName } from "ejs";
/* import Select from 'react-select' */

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email1: "",
      password: "",
      name: "",
      subject: "",
      class: "",
      school: "",
      valid: false,
      // valid: false,
      // userId: "",
    };
  }
  signup = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:8000/teacher/signup", {
      name: this.state.name,
      school: this.state.school,
      class: this.state.class,
      subject: this.state.subject,

      email: this.state.email1,
      password: this.state.password,
      /* city: this.state.location,
            password2: this.state.password, */
    })
      .then((res) => {
        return (
          localStorage.setItem("userID", res.data.userID),
          localStorage.setItem("useremail", res.data.useremail),
          localStorage.setItem("token", res.data.token),
          localStorage.setItem("type", "Teacher"),
          localStorage.setItem("class", res.data.class),
          localStorage.setItem("rollNumber", res.data.rollnumber),
          localStorage.setItem("name", res.data.name),
          this.setState({ valid: true })
        );
      })
      .catch((err) => console.log(err));
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChange2(e) {
    this.setState({ location: e.value });
  }

  render() {
    if (this.state.valid) {
      <Redirect to="/" />;
    }
    const options = [
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Bihar", label: "Bihar" },
      { value: "West Bengal", label: "West Bengal" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Rajasthan", label: "Rajasthan" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Gujarat", label: "Gujarat" },
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Odisha", label: "Odisha" },
      { value: "Telangana", label: "Telangana" },
      { value: "Kerala", label: "Kerala" },
      { value: "Jharkhand", label: "Jharkhand" },
      { value: "Assam", label: "Assam" },
      { value: "Punjab", label: "Punjab" },
      { value: "Chattisgarh", label: "Chattisgarh" },
      { value: "Haryana", label: "Haryana" },
      { value: "Delhi", label: "Delhi" },
      { value: "Jammu and Kashmir", label: "Jammu and kashmir" },
      { value: "Uttarakhand", label: "Uttarakhand" },
      { value: "Himachal Pradesh", label: "Himachal Pradesh" },
      { value: "Tripura", label: "Tripura" },
      { value: "Meghalaya", label: "Mehghalaya" },
      { value: "Manipur", label: "Manipur" },
      { value: "Nagaland", label: "Nagaland" },
      { value: "Goa", label: "Goa" },
      { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
      { value: "Mizoram", label: "Mizoram" },
    ];
    if (this.state.valid) {
      localStorage.setItem("token", this.state.valid);
      localStorage.setItem("userId", this.state.userId);
    }
    if (this.state.valid) return <Redirect to="/"></Redirect>;

    return (
      <div className="signupPt">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Log In
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/loginDoc">
                    As a Doctor
                  </a>
                  <a className="dropdown-item" href="/loginPt">
                    As a Patient
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Contact Us <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="rounded row">
          <div className="col-lg-8">
            <img alt="..." src={img} />
          </div>
          <div className="col-lg-4 shadow-lg text-center rounded">
            <h4> Sign-Up </h4>
            <form>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-signature fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                    value={this.state.name}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label htmlFor="exampleInputEmail1">
                    <i className="fas fa-envelope fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="email1"
                    placeholder="Enter your email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={this.state.email1}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-key fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.password}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i class="fas fa-check-circle fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.subject}
                    name="subject"
                    type="text"
                    placeholder="subject"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i class="fas fa-check-circle fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.school}
                    name="school"
                    type="text"
                    placeholder="school"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-map-marked-alt fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <div className="col-sm-10">
                    <input
                      value={this.state.class}
                      name="class"
                      type="number"
                      placeholder="Classs"
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={this.signup}
                  className="btn btn-primary signInPtBtn"
                  style={{ marginTop: "20px" }}
                >
                  Sign-up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;

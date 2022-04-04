import React, { Component } from "react";
import IntlTelInput from "react-intl-tel-input";
import FlagSelect from "./flagSelect";
import "react-intl-tel-input/dist/main.css";
import "./form.css";

class Form extends Component {
  render() {
    return (
      <div className="formContainer">
        <form className="row g-3 form">
          <h1>Welcome to Edufunda</h1>
          <p>
            Lorem ipsum dolor sit amen, consectetur
            <br />
            adipiscing elit
          </p>
          <div className="col-md-6">
            <label htmlFor="inputFirstname" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              id="inputFirstname"
              placeholder="Barley"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastname" className="form-label">
              Last Name
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Johnson"
            />
          </div>
          <div className="nationalityDetails">
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                Country
              </label>
              <FlagSelect />
            </div>
            <div className="col-md-5">
              <label
                htmlFor="inputState"
                className="form-label"
                defaultValue={"DEFAULT"}
              >
                Phone Number
              </label>
              <IntlTelInput
                preferredCountries={["za"]}
                containerClassName="intl-tel-input"
                inputClassName="form-control"
              />
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="inputEmailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmailAddress"
              placeholder="barly@dipainhouse.com"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputAddress"
              placeholder="**********"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputConfirmPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmAddress"
              placeholder="**********"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-danger button">
              Sign in
            </button>
          </div>
          <div className="signin">
            <p>
              Have an account?
              <a>
                <u>
                  <b>Sign In</b>
                </u>
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

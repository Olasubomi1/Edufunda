import React from "react";
import IntlTelInput from "react-intl-tel-input";
import FlagSelect from "./flagSelect";
import Input from "./input";
import { registerUser } from "./../services/httpservices";
import Joi from "joi-browser";
import FormValidation from "./formValidation";
import "react-intl-tel-input/dist/main.css";
import "./form.css";
class Form extends FormValidation {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
  };
  doSubmit = async () => {
    try {
      const response = await registerUser(this.state.data);
      // console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.name = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="row g-3 form">
          <h1>Welcome to Edufunda</h1>
          <p>
            Lorem ipsum dolor sit amen, consectetur
            <br />
            adipiscing elit
          </p>
          <div className="col-md-6">
            <Input
              label="First Name"
              name="firstname"
              value={data.firstname}
              onChange={this.handleChange}
              error={errors.name}
            />
          </div>
          <div className="col-md-6">
            <Input
              label="Last Name"
              name="lastname"
              value={data.lastname}
              onChange={this.handleChange}
              error={errors.lastname}
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
            <Input
              label="Email"
              name="email"
              value={data.email}
              onChange={this.handleChange}
              error={errors.email}
            />
          </div>
          <div className="col-12">
            <Input
              label="Password"
              name="password"
              value={data.password}
              onChange={this.handleChange}
              error={errors.password}
            />
          </div>
          <div className="col-12">
            <Input
              label="Password"
              name="password"
              value={data.password}
              onChange={this.handleChange}
              error={errors.password}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              disabled={this.validate()}
              onClick={() => this.doSubmit()}
              className="btn btn-danger button"
            >
              Register
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

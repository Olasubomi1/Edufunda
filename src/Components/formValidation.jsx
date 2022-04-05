import React, { Component } from "react";
import Joi from "joi-browser";

class FormValidation extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    // Using Joi to validate user input
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    // console.log(result);
    // Validating the input of users
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    // Validating property with Joi
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    // console.log(error);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    // this privents the form from originally calling the server
    e.preventDefault();

    //this is used for validating user input
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    // Using the spread operator, this maps and update the state of the input into a new object
    // i.e not directly modifying the state
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    // console.log(errors);
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        onClick={this.doSubmit()}
        className="btn btn-primary loginButton"
      >
        {label}
      </button>
    );
  }
}

export default FormValidation;

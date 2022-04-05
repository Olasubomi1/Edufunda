import React from "react";

function Input({ type, name, label, value, error, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        autoComplete="on"
        placeholder={"Enter " + name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

/* 
  How to use 
  <Input
  label="Admin Username"
  name="username"
  value={account.username}
  onChange={this.handleChange}
  /> */

export default Input;

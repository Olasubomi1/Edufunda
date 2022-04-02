import React from "react";
import "./form.css";

function Form() {
  return (
    <div>
      <form class="row g-3 form">
        <h1>Welcome to Edufunda</h1>
        <p>
          Lorem ipsum dolor sit amen, consectetur
          <br />
          adipiscing elit
        </p>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Country
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Phone Number
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Email Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-danger button">
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

export default Form;

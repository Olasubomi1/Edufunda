import React from "react";
import Form from "./form";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h1 className="edufunda">Edufunda</h1>
              <img src="learning.svg" className="introImage" />
              <div className="intro">
                <h1>Assignment Solution</h1>
                <p>
                  It is a long established fact that a reader will be <br />
                  distracted by the readable content
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

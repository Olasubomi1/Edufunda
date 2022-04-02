import React from "react";
import Form from "./form";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">1 of 2</div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

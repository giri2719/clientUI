import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AskPage = () => {
  return (
    <div>
      <Header />

      <div>
        <form id="askform">
          <div class="mb-3">
            <label class="form-label">Ask your question</label>
            <input
              type="text"
              placeholder="Enter your question"
              class="form-control"
              style={{ "border-radius": "6px", border: "0.5px solid" }}
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div class="mb-3">
            <label class="form-label">Detail of your question</label>
            <input
              type="textarea"
              placeholder="Enter details about your question"
              style={{
                "border-radius": "6px",
                height: "200px",
                border: "0.5px solid",
              }}
              class="form-control"
            ></input>
          </div>
          <button
            type="submit"
            style={{
              "margin-left": "500px",
              "margin-top": "80px",
              "border-radius": "8px",
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AskPage;

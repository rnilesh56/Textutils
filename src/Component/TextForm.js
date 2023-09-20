import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "Success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const handleClr = () => {
    let newtext = text.toLowerCase();
    setText("");
    props.showAlert("All clear", "Success");
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed", "Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "Success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `dark` ? `white` : `#042743` }}
      >
        <div>
          <h2 className="mb-4"> {props.heading} </h2>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === `dark` ? `#13466e` : `white`,
                color: props.mode === `dark` ? `white` : `#042743`,
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1 "
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClr}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Space
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === `dark` ? `white` : `#042743` }}
        >
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words | {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
}

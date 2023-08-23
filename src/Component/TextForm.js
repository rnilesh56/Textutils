import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "Success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "Success");
  };
  
  const handleClr = () => {
    // console.log("Uppercase was clicked " + text);
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
    // console.log("On change");
    setText(event.target.value);
  };
  
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRangle(0, 9999);
    navigator.clipboard.writeText(text.value);
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
          <h1> {props.heading} </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === `dark` ? `gray` : `white`,
                color: props.mode === `dark` ? `white` : `#042743`,
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClr}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Space
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === `dark` ? `white` : `#042743` }}
        >
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} Words | {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the text box to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
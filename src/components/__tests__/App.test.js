import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("it shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  //   look inside the div
  //   and checks to see if the CommentCox is in there
  expect(div.innerHTML).toContain("Comment box");

  ReactDOM.unmountComponentAtNode(div);
});

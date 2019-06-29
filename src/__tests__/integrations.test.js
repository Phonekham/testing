import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";

it("fetch a list of comment and display them", () => {
  // attemp to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetchComments button and click it
  // expect to find list of comments
});

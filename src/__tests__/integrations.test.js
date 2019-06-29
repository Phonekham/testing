import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios, install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetch #1" }, { name: "Fetch #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetch a list of comment and display them", () => {
  // attemp to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetchComments button and click it
  wrapped.find(".fetch-comments").simulate("click");
  // expect to find list of comments
  expect(wrapped.find("li").length).toEqual(2);
});

import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["c1", "c2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("Create one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("show the text for each comment", () => {
  //   console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain("c1");
  expect(wrapped.render().text()).toContain("c2");
});

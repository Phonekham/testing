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
  console.log(wrapped.find("li").length);
});

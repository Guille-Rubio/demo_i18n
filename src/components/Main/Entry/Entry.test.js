import React from "react";
import { shallow } from "enzyme";
import Entry from "./Entry";

describe("Entry", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Entry />);
    expect(wrapper).toMatchSnapshot();
  });
});

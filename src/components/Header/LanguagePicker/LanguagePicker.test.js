import React from "react";
import { shallow } from "enzyme";
import LanguagePicker from "./LanguagePicker";

describe("LanguagePicker", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LanguagePicker />);
    expect(wrapper).toMatchSnapshot();
  });
});

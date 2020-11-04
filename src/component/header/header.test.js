import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  it("Should render without erros", () => {
    const component = setUp();
    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const component = setUp();
    const wrapper = component.find(".logoIMG");
    expect(wrapper.length).toBe(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Foo from "../../Foo";

describe("<App/>", () => {
  let wrapper;
  wrapper = shallow(<App />);

  it("renders three <Foo /> components", () => {
    const element = wrapper.find(Foo);
    expect(element).toHaveLength(1);
  });
});

import React from "react";
import { shallow, render, mount } from "enzyme";
import Product from "./Product";

describe("Product", () => {
  let props;
  let shallowProduct;
  let renderedProduct;
  let mountedProduct;

  const shallowTestComponent = () => {
    if (!shallowProduct) {
      shallowProduct = shallow(<Product {...props} />);
    }
    return shallowProduct;
  };

  const renderTestComponent = () => {
    if (!renderedProduct) {
      renderedProduct = render(<Product {...props} />);
    }
    return renderedProduct;
  };

  const mountTestComponent = () => {
    if (!mountedProduct) {
      mountedProduct = mount(<Product {...props} />);
    }
    return mountedProduct;
  };

  beforeEach(() => {
    props = {};
    shallowProduct = undefined;
    renderedProduct = undefined;
    mountedProduct = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});

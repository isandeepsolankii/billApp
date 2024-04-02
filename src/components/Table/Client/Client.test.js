import React from "react";
import { shallow, render, mount } from "enzyme";
import Client from "./Client";

describe("Client", () => {
  let props;
  let shallowClient;
  let renderedClient;
  let mountedClient;

  const shallowTestComponent = () => {
    if (!shallowClient) {
      shallowClient = shallow(<Client {...props} />);
    }
    return shallowClient;
  };

  const renderTestComponent = () => {
    if (!renderedClient) {
      renderedClient = render(<Client {...props} />);
    }
    return renderedClient;
  };

  const mountTestComponent = () => {
    if (!mountedClient) {
      mountedClient = mount(<Client {...props} />);
    }
    return mountedClient;
  };

  beforeEach(() => {
    props = {};
    shallowClient = undefined;
    renderedClient = undefined;
    mountedClient = undefined;
  });

  // Shallow / unit tests begin here

  // Render / mount / integration tests begin here
});

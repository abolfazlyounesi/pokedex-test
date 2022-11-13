import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { getRootStateMock } from "../../state/store";
import LandingScreen from "./landing.screen";
import * as UsersReducer from "../../state/slices/user.slice";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../api";

const mockStore = configureMockStore();
const store = mockStore(getRootStateMock());
const setup = () => {
  const wrapper = render(
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <LandingScreen />
      </ReduxProvider>
    </ApolloProvider>
  );
  return {
    wrapper
  };
};

describe("Landing screen test", () => {
  it("should render the landing screen elements", async () => {
    const { wrapper } = setup();

    const searchbar = wrapper.getByTestId("searchbar");
    expect(searchbar).toBeInTheDocument();

    const types = wrapper.getByTestId("types");
    expect(types).toBeInTheDocument();
  });

  it("should not render the landing screen's list while loading", async () => {
    const { wrapper } = setup();

    const list = wrapper.findByTestId("items-list");

    expect(Object.values(list).length).toBe(0);
  });

  it("logout button should dispatch setCurrentUser", async () => {
    const setUserSpy = jest.spyOn(UsersReducer, "setCurrentUser");

    const { wrapper } = setup();

    const button = wrapper.getByTestId("logout-button");

    fireEvent.click(button);

    expect(setUserSpy).toHaveBeenCalledTimes(1);
  });
});

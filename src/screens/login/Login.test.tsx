import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { getRootStateMock } from "../../state/store";
import LoginScreen from "./login.screen";
import * as UsersReducer from "../../state/slices/user.slice";

const mockStore = configureMockStore();
const store = mockStore(getRootStateMock());
const setup = () => {
  const wrapper = render(
    <ReduxProvider store={store}>
      <LoginScreen />
    </ReduxProvider>
  );
  return {
    wrapper
  };
};

describe("Login screen test", () => {
  it("should render the login screen elements", () => {
    const { wrapper } = setup();

    const input = wrapper.getByTestId("username-input");
    expect(input).toBeInTheDocument();

    const button = wrapper.getByTestId("login-button");
    expect(button).toBeInTheDocument();
  });

  it("Login / Register button should dispatch setCurrentUser", () => {
    const setUserSpy = jest.spyOn(UsersReducer, "setCurrentUser");

    const { wrapper } = setup();

    const input = wrapper.getByTestId("username-input");
    fireEvent.change(input, { target: { value: "abol" } });

    const button = wrapper.getByTestId("login-button");

    fireEvent.click(button);

    expect(setUserSpy).toHaveBeenCalledTimes(1);
  });
});

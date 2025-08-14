import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
             <Header />
          </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
     <Provider store={appStore}>
        <Header />
     </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("(0 items)");
  expect(cartItems).toBeInTheDocument();
});

test("Should change login button to logout on click", () => {
 render(
    <BrowserRouter>
      <Provider store={ appStore }>
        <Header />
      </Provider>
    </BrowserRouter>
 );

  const loginButton = screen.getByRole("button", { name : "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();

  fireEvent.click(logoutButton);

  expect(loginButton).toBeInTheDocument();
});


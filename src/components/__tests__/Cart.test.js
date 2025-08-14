import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        },
    });
});


it("Should Load Restaurant Menu Component and test while we click on Add+ button it should update header component's cart with items and cartpage", async () => {
    await act(async () => 
     render( 
        <BrowserRouter>
          <Provider store={appStore}>
             <Header />
             <RestaurantMenu /> 
             <Cart />
          </Provider>
      </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("GARLIC BREADS & MORE (21)");

    fireEvent.click(accordionHeader);
    
    expect(screen.getAllByTestId("foodItems").length).toBe(21);

    expect(screen.getByText("(0 items)")).toBeInTheDocument();


    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(23);

    fireEvent.click(screen.getByRole("button",{ name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(21);

    expect(screen.getByText((content) =>
        content.includes("Food Ordering App's Cart is Empty") && content.includes("Please Add Items to the Cart")
      )).toBeInTheDocument();
      
});
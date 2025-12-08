import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../Context/ThemeContext";
import MOCK_API_DATA from "../mocks/mockAPIData.json"
import { BrowserRouter } from "react-router"
import RestaurantMenu from "../RestaurantMenu";
import RestaurantCategory from "../RestaurantCategory";
import RES_CATEGORY_MOCK from "../mocks/resCategoryMock.json"
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import ItemsList from "../ItemsList";
import { itemListMock } from "../mocks/itemListMock";
import Header from "../Header";
import Cart from "../Cart";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_API_DATA)
        }
    })
})

it("Should load menu for the restaurant", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Body />
                </ThemeProvider>
            </BrowserRouter>
        )
    })

    const resCard = screen.getByText("Pizza Hut")

    fireEvent.click(resCard)

    render(
        <BrowserRouter>
            <ThemeProvider>
                <RestaurantMenu />
            </ThemeProvider>
        </BrowserRouter>
    )

    const menuHeading = screen.getByText("Generic Name")

    expect(menuHeading).toBeInTheDocument()
})

it("Should open the menu items on clicking the menu category", async () => {
    render(
        <Provider store={appStore}>
            <RestaurantCategory
                data={RES_CATEGORY_MOCK}
                showItems={false}
                setShowIndex={jest.fn()}
            />
        </Provider>
    )

    const resCategory = screen.getByText("Recommended (2)")

    fireEvent.click(resCategory)

    render(
        <Provider store={appStore}>
            <RestaurantCategory
                data={RES_CATEGORY_MOCK}
                showItems={true}
                setShowIndex={jest.fn()}
            />
        </Provider>
    )

    const itemList = screen.getAllByTestId("itemList")

    expect(itemList.length).toBe(2)
})

it("Should update cart items when add button is clicked", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ThemeProvider>
                    <Header />
                    <ItemsList items={itemListMock} />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )

    const addBtn = screen.getAllByRole("button", { name: "Add" })

    fireEvent.click(addBtn[0])

    const cartItems = screen.getByTestId("cartLabel")

    expect(cartItems).toHaveTextContent("1");

    fireEvent.click(addBtn[1])

    expect(cartItems).toHaveTextContent("2");
})

it("Should empty cart items when clear cart is clicked", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ThemeProvider>
                    <Header />
                    <ItemsList items={itemListMock} />
                    <Cart />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )

    const removeBtns = screen.getAllByRole("button", { name: "Remove" })

    expect(removeBtns.length).toBe(2)

    fireEvent.click(removeBtns[0])

    const cartItems = screen.getByTestId("cartLabel")

    expect(cartItems).toHaveTextContent("1");

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" })

    fireEvent.click(clearCartBtn)

    expect(cartItems).toHaveTextContent("0");
})


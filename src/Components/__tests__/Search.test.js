import { act, fireEvent, render, screen } from "@testing-library/react"
import MOCK_API_DATA from "../mocks/mockAPIData.json"
import Body from "../Body"
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../Context/ThemeContext";
import { BrowserRouter } from "react-router"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_API_DATA)
        }
    })
})

it("Should show relevant restaurant cards after searching pizza", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Body />
                </ThemeProvider>
            </BrowserRouter>
        )
    })

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByText("Search")

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, { target: { value: "pizza" } })

    fireEvent.click(searchBtn)

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(4)
})

it("Should show relevant restaurant cards after clicking Top Rated Restaurants button", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <ThemeProvider>
                    <Body />
                </ThemeProvider>
            </BrowserRouter>
        )
    })

    const cardsBeforeClick = screen.getAllByTestId("resCard")

    expect(cardsBeforeClick.length).toBe(20)

    const topRatedBtn = screen.getByRole("button", { name: "Top rated restaurants" })

    fireEvent.click(topRatedBtn)

    const cardsAfterClick = screen.getAllByTestId("resCard")

    expect(cardsAfterClick.length).toBe(5)
})
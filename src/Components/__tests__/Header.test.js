import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router"
import { Provider } from "react-redux"
import appStore from "../../store/appStore"
import { ThemeProvider } from "../../Context/ThemeContext"

it("Should render Header Compoenent with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" })

    expect(loginButton).toBeInTheDocument()
})

it("Should show logout button when clicked on login button", async () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" })

    fireEvent.click(loginButton)

    const logoutButton = await screen.findByRole("button", { name: "Logout" })

    expect(logoutButton).toBeInTheDocument()
})

it("Should show cart items link and label in Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )

    const cartLabel = screen.getByTestId("cartLabel")
    const cartLink = screen.getByTestId("cartLink")

    expect(cartLabel).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()
})
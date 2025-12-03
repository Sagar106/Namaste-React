import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page test cases", () => {
    it("Should load contact us component", () => {
        render(<Contact />)

        const heading = screen.getByRole("heading")

        expect(heading).toBeInTheDocument()
    })

    it("Should load button inside contact us component", () => {
        render(<Contact />)

        const button = screen.getByText("Submit")

        expect(button).toBeInTheDocument()
    })

    it("Should load name input field", () => {
        render(<Contact />)

        const name = screen.getByPlaceholderText("name")

        expect(name).toBeInTheDocument()
    })

    it("Should load all the input boxes", () => {
        render(<Contact />)

        const inputBoxes = screen.getAllByRole("textbox")

        expect(inputBoxes).toHaveLength(2)
    })
})
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { resCardMockData } from "../mocks/resCardMockData";
import { withPromotedLabel } from "../RestaurantCard";
import { resPromotedMock } from "../mocks/resPromotedMockData";

it("Should load Restaurant Card component with props data", () => {
    render(<RestaurantCard resData={resCardMockData} />)

    const name = screen.getByText("Olio - The Wood Fired Pizzeria")

    expect(name).toBeInTheDocument()
})

it("Should load Restaurant Card with Top Rated label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    render(<RestaurantCardPromoted resData={resPromotedMock} />)

    const promotedLabel = screen.getByTestId("promoted-label")

    expect(promotedLabel).toBeInTheDocument()
})
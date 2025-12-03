import { calculateSum } from "../calculateSum.js"

test("calculateSum function should calcuate the sum of two numbers", () => {
    const result = calculateSum(3, 4);

    expect(result).toBe(7)
})
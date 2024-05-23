import { fireEvent, render, screen } from "@testing-library/react"
import Filters from "./Filters"

test("User can see 4 dropdown components", () => {
  const dropdown = render(<Filters dispatch={() => null} />)
  const filterOptions = screen.getAllByRole("combobox")

  expect(filterOptions).toHaveLength(4)
  dropdown.unmount()
})

test("User can select an option from one of the dropdown components", async () => {
  const dropdown = render(<Filters dispatch={() => null} />)
  const strategyInput = await dropdown.findByTestId("input-strategy")
  const strategyLabel = screen.getByLabelText("strategy-list")

  fireEvent.change(strategyInput, { target: { value: "Thematic" } })

  expect(strategyInput).toHaveValue("Thematic")
  expect(strategyLabel).toHaveTextContent("Thematic")

  fireEvent.change(strategyInput, { target: { value: "Factors" } })

  expect(strategyInput).toHaveValue("Factors")
  expect(strategyLabel).toHaveTextContent("Factors")

  fireEvent.change(strategyInput, { target: { value: "Esg" } })

  expect(strategyInput).toHaveValue("Esg")
  expect(strategyLabel).toHaveTextContent("Esg")

  dropdown.unmount()
})

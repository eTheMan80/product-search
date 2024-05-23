import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders Product Finder header", () => {
  render(<App />)
  const headerElement = screen.getByText(/Product Finder/i)
  expect(headerElement).toBeInTheDocument()
})

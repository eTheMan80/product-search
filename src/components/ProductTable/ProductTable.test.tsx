import { render } from "@testing-library/react"
import ProductTable from "./ProductTable"
import data from "../../api/data.json"

test("User can see the product table", () => {
  const productPage = render(<ProductTable products={data.products} />)
  const table = productPage.getByTestId("product-table")

  expect(table).toBeInTheDocument()
  productPage.unmount()
})

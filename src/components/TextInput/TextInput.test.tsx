import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TextInput from "./TextInput"

test("User can see the search field", () => {
  const searchField = render(<TextInput dispatch={() => null} />)
  const textInput = searchField.getByTestId("search-field")

  expect(textInput).toBeInTheDocument()
  searchField.unmount()
})

test("User can type text in the search field", async () => {
  const searchField = render(<TextInput dispatch={() => null} />)
  const textInput = searchField.getByRole("textbox") as HTMLInputElement

  await userEvent.type(textInput, "Cloud")

  expect(textInput.value).toBe("Cloud")
  searchField.unmount()
})

import { Dispatch, useState, ChangeEvent, KeyboardEvent } from "react"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import { Search } from "@mui/icons-material/"

const TextInput = ({ dispatch }: { dispatch: Dispatch<ActionTypes> }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const handleInputValue = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value)
  }
  const searchProducts = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      if (inputValue.trim() === "") {
        dispatch({
          type: "LoadProducts",
        })
      } else {
        dispatch({
          type: "SearchProduct",
          payload: inputValue,
        })
      }
    }
  }
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <Input
        id="search-field"
        data-testid="search-field"
        value={inputValue}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        placeholder="SEARCH"
        onChange={handleInputValue}
        onKeyUp={searchProducts}
      />
    </FormControl>
  )
}

export default TextInput

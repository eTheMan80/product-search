import React, { useReducer } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextInput from "./components/TextInput"
import Filters from "./components/Filters"
import ProductTable from "./components/ProductTable"
import { initialState, reducer } from "./store/reducer"
import "./App.css"

function App() {
  const [{ products }, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Finder
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginTop: "36px",
          width: "66%",
        }}
      >
        <TextInput dispatch={dispatch} />
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "24px",
        }}
      >
        <Filters dispatch={dispatch} />
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "72px",
        }}
      >
        <ProductTable products={products} />
      </Box>
    </div>
  )
}

export default App

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { productTableHeaders } from "../../helper/text"

const ProductTable = ({ products }: { products: ProductDataProps[] }) => {
  if (products.length === 0) {
    return (
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" component="p" gutterBottom>
          Product list is empty.
        </Typography>
      </Box>
    )
  }
  return (
    <TableContainer component={Paper}>
      <Table
        id="product-table"
        data-testid="product-table"
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {productTableHeaders.map((header, index) => {
              return (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: `${index < 4 ? "rgba(39, 44, 135, 0.8)" : "rgba(39, 44, 135, 1)"}`,
                    color: "#fff",
                  }}
                >
                  {header}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fundName}</TableCell>
              <TableCell>{item.primaryTicker}</TableCell>
              <TableCell>{item.incomeTreatment}</TableCell>
              <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                {item.classCurrency}
              </TableCell>
              <TableCell>{item.isin}</TableCell>
              <TableCell>{item.strategy}</TableCell>
              <TableCell>{item.assetClass}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.style}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable

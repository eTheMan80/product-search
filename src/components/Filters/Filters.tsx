import { Dispatch, useState } from "react"
import Grid from "@mui/material/Unstable_Grid2"
import OutlinedInput from "@mui/material/OutlinedInput"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import {
  strategyList,
  assetClassList,
  marketRegionList,
  styleList,
  optionCategory,
  marketRegionIndentList,
} from "../../helper/text"

const Filters = ({ dispatch }: { dispatch: Dispatch<ActionTypes> }) => {
  const [selectStrategy, setSelectStrategy] = useState<string>("")
  const [selectAssetClass, setSelectAssetClass] = useState<string>("")
  const [selectMarketRegion, setSelectMarketRegion] = useState<string>("")
  const [selectStyle, setSelectStyle] = useState<string>("")

  const handleSelectStrategy = (ev: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = ev
    setSelectStrategy(value)
    if (selectStrategy !== "") {
      dispatch({
        type: "LoadProducts",
      })
      setSelectAssetClass("")
      setSelectMarketRegion("")
      setSelectStyle("")
    }
    dispatch({
      type: "FilterProduct",
      payload: {
        type: "strategy",
        name: value,
      },
    })
  }

  const handleSelectAssetClass = (ev: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = ev
    setSelectAssetClass(value)
    if (selectAssetClass !== "") {
      dispatch({
        type: "LoadProducts",
      })
      setSelectStrategy("")
      setSelectMarketRegion("")
      setSelectStyle("")
    }
    dispatch({
      type: "FilterProduct",
      payload: {
        name: value,
        type: "assetClass",
      },
    })
  }

  const handleSelectMarketRegion = (ev: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = ev
    setSelectMarketRegion(value)
    if (selectMarketRegion !== "") {
      dispatch({
        type: "LoadProducts",
      })
    }
    setSelectStrategy("")
    setSelectAssetClass("")
    setSelectStyle("")
    dispatch({
      type: "FilterProduct",
      payload: {
        name: value,
        type: "region",
      },
    })
  }

  const handleSelectStyle = (ev: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = ev
    setSelectStyle(value)
    if (selectStyle !== "") {
      dispatch({
        type: "LoadProducts",
      })
    }
    setSelectStrategy("")
    setSelectAssetClass("")
    setSelectMarketRegion("")
    dispatch({
      type: "FilterProduct",
      payload: {
        name: value,
        type: "style",
      },
    })
  }

  const resetProductList = () => {
    dispatch({
      type: "LoadProducts",
    })
    setSelectStrategy("")
    setSelectAssetClass("")
    setSelectMarketRegion("")
    setSelectStyle("")
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <FormControl id="3" sx={{ width: "100%" }}>
          <Select
            labelId="strategy-list"
            data-testid="select-strategy"
            displayEmpty
            value={selectStrategy}
            onChange={handleSelectStrategy}
            sx={{ width: "auto" }}
            input={<OutlinedInput />}
            inputProps={{
              "aria-label": "strategy-list",
              "data-testid": "input-strategy",
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "Strategy"
              }

              return selectStrategy
            }}
          >
            {strategyList.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={selectStrategy === item} />
                  <ListItemText primary={item} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={2}>
        <FormControl sx={{ width: "100%" }}>
          <Select
            labelId="asset-class-list"
            data-testid="select-asset-class"
            displayEmpty
            value={selectAssetClass}
            onChange={handleSelectAssetClass}
            sx={{ width: "auto" }}
            input={<OutlinedInput />}
            inputProps={{
              "aria-label": "asset-class-list",
              "data-testid": "input-asset-class",
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "Asset Class"
              }

              return selectAssetClass
            }}
          >
            {assetClassList.map((item) => {
              return (
                <MenuItem
                  key={item}
                  value={optionCategory.includes(item) ? "" : item}
                  disabled={optionCategory.includes(item)}
                >
                  {optionCategory.includes(item) ? (
                    <>{item}</>
                  ) : (
                    <>
                      <Checkbox checked={selectAssetClass === item} />
                      <ListItemText primary={item} />
                    </>
                  )}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={2}>
        <FormControl sx={{ width: "100%" }}>
          <Select
            labelId="market-region-list"
            data-testid="select-market-region"
            displayEmpty
            value={selectMarketRegion}
            onChange={handleSelectMarketRegion}
            sx={{ width: "auto" }}
            input={<OutlinedInput />}
            inputProps={{
              "aria-label": "market-region-list",
              "data-testid": "input-market-region",
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "Market & Region"
              }

              return selectMarketRegion
            }}
          >
            {marketRegionList.map((item) => {
              return (
                <MenuItem
                  key={item}
                  value={optionCategory.includes(item) ? "" : item}
                  disabled={optionCategory.includes(item)}
                  sx={{
                    paddingLeft: `${marketRegionIndentList.includes(item) ? "46px" : "16px"}`,
                  }}
                >
                  {optionCategory.includes(item) ? (
                    <>{item}</>
                  ) : (
                    <>
                      <Checkbox checked={selectMarketRegion === item} />
                      <ListItemText primary={item} />
                    </>
                  )}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={2}>
        <FormControl sx={{ width: "100%" }}>
          <Select
            labelId="style-list"
            data-testid="select-style"
            displayEmpty
            value={selectStyle}
            onChange={handleSelectStyle}
            sx={{ width: "auto" }}
            input={<OutlinedInput />}
            inputProps={{
              "aria-label": "style-list",
              "data-testid": "input-style",
            }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return "Style"
              }

              return selectStyle
            }}
          >
            {styleList.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={selectStyle === item} />
                  <ListItemText primary={item} />
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={2}>
        <Box
          sx={{
            display: "Flex",
            justifyItems: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button variant="outlined" onClick={resetProductList}>
            Reset
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Filters

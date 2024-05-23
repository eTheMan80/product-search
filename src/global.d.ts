type ProductDataProps = {
  id: string
  fundName: string
  primaryTicker: string
  incomeTreatment: string
  classCurrency: string
  isin: string
  strategy: string
  assetClass: string
  region: string
  style: string
}

type ProductProps = {
  products: ProductDataProps[]
}

type FilteredProductProps = {
  type: string
  name: string
}

type Action = {
  type: "LoadProducts"
}

type ActionWithPayload =
  | {
    type: "FilterProduct"
    payload: FilteredProductProps
  }
  | { type: "SearchProduct"; payload: string }

type ActionTypes = Action | ActionWithPayload

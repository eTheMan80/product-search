import data from "../api/data.json"

type InitialState = {
  products: ProductDataProps[]
}

export const initialState: InitialState = {
  products: data.products,
}

export const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "LoadProducts":
      return {
        ...state,
        products: data.products,
      }
    case "FilterProduct":
      return {
        ...state,
        products: state.products.filter(
          (item) =>
            item[action.payload.type as keyof ProductDataProps] ===
            action.payload.name,
        ),
      }
    case "SearchProduct":
      return {
        ...state,
        products: state.products.filter((item) =>
          item.fundName.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      }
    default:
      return state
  }
}

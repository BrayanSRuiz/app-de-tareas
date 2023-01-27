import types from "./types";

const miReducer = (state, action) => {
  switch (action.type) {
    case types.añadir:
      return [...state, action.payload];
    case types.borrar:
      return state.filter((dato) => dato.id !== action.payload);
  }
};

export default miReducer;

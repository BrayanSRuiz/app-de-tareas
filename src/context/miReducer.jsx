
export const types = {
  añadir: "añadir",
  borrar: "borrar",
  login: 'login',
  logout: 'logout',
};

 export const miReducer = (state, action) => {
  switch (action.type) {
    case types.añadir:
      return [...state, action.payload];
    case types.borrar:
      return state.filter((dato) => dato.id !== action.payload);
  }
};

export const reduce = (state, action) => {
  switch(action.type){
    case types.login:
      return {
        logeado: true,
        usuario: action.payload
      }
    case types.logout:
      return {
        logeado: false,
        usuario: action.payload,
      }
    default:
      return state
  }
}

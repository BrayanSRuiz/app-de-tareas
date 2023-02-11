import React, { useReducer, useState } from "react";
import { Contexto } from "./Contexto";
import { miReducer, reduce, types } from "./miReducer";

const valorInicial = [];
const init = {
  logeago: false,
  usuario: null,
}

const Provider = ({ children }) => {
  const [miTarea, setMiTarea] = useState("");
  const [miPrioridad, setMiPrioridad] = useState("baja");
  const [tareas, dispatch] = useReducer(miReducer, valorInicial);
  const [autentificacion, dispatch1] = useReducer(reduce,init )
  const añadir = () => {
    const action = {
      type: types.añadir,
      payload: {
        id: Date.now(),
        nombre: miTarea,
        prioridad: miPrioridad,
      },
    }
    dispatch(action)
  }

  const borrar = (tarea) => {
   const action = { 
      type: types.borrar, 
      payload: tarea.id 
    }
    dispatch(action);
  }

  const logearse = (user = '') => {
    const action = {
      type: types.login,
      payload: user,
    }
    dispatch1(action)
  }

  const deslogearse = () => {
    const action = {
      type: types.logout,
      payload: null,
    }
    dispatch1(action)
  }

  return <Contexto.Provider value={{...autentificacion, logearse, deslogearse, tareas, añadir, borrar, miTarea, miPrioridad, setMiTarea, setMiPrioridad}}>{children}</Contexto.Provider>;
};

export default Provider;

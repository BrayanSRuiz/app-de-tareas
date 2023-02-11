import React, { useReducer, useState } from "react";
import { Contexto } from "./Contexto";
import { miReducer, types } from "./miReducer";

const valorInicial = [];

const Provider = ({ children }) => {
  const [miTarea, setMiTarea] = useState("");
  const [miPrioridad, setMiPrioridad] = useState("baja");
  const [tareas, dispatch] = useReducer(miReducer, valorInicial);
  const añadir = () => {
    dispatch({
      type: types.añadir,
      payload: {
        id: Date.now(),
        nombre: miTarea,
        prioridad: miPrioridad,
      },
    })
  }

  const borrar = (tarea) => {
    dispatch({ type: types.borrar, payload: tarea.id });
  }

  return <Contexto.Provider value={{tareas, añadir, borrar, miTarea, miPrioridad, setMiTarea, setMiPrioridad}}>{children}</Contexto.Provider>;
};

export default Provider;

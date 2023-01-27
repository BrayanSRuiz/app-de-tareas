import React, { useReducer, useRef, useState } from "react";
import styles from "./styles/ListaDeTareas.module.css";
import { RiAddBoxFill } from "react-icons/ri";
import miReducer from "./miReducer";
import types from "./types";
import Tareas from "./Tareas";

const valorInicial = [];

const ListaDeTareas = () => {
  const [miTarea, setMiTarea] = useState("");
  const [miPrioridad, setMiPrioridad] = useState("baja");
  const [tareas, dispatch] = useReducer(miReducer, valorInicial);
  const inputRef = useRef(null);
  return (
    <div className={styles.añadirContainer}>
      <div className={styles.añadir}>
        <h1>Agregar tarea</h1>
        <label htmlFor="tarea" className={styles.añadirLabel}>
          Tarea
        </label>
        <input
          type="text"
          id="tarea"
          placeholder="Tarea"
          value={miTarea}
          ref={inputRef}
          onChange={(e) => setMiTarea(e.target.value)}
        />
        <label htmlFor="prioridad" className={styles.añadirLabel}>
          Prioridad
        </label>
        <select
          id="prioridad"
          value={miPrioridad}
          onChange={(e) => setMiPrioridad(e.target.value)}
        >
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </select>
        <button
          className={styles.boton}
          onClick={() => {
            setMiTarea("");
            setMiPrioridad("baja");
            inputRef.current.focus();
            dispatch({
              type: types.añadir,
              payload: {
                id: Date.now(),
                nombre: miTarea,
                prioridad: miPrioridad,
              },
            });
          }}
        >
          <RiAddBoxFill size={30} />
        </button>
      </div>
      {tareas.map((tarea) => (
        <Tareas key={tarea.id} tarea={tarea} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default ListaDeTareas;

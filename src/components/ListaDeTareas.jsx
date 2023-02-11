import React, { useContext, useRef, useState } from "react";
import styles from "./styles/ListaDeTareas.module.css";
import { RiAddBoxFill } from "react-icons/ri";
import Tareas from "./Tareas";
import { Contexto } from "../context/Contexto";

const ListaDeTareas = () => {
  const {miTarea, setMiTarea} = useContext(Contexto)
  const {miPrioridad, setMiPrioridad} = useContext(Contexto)
  const {añadir} = useContext(Contexto)
  const {tareas} = useContext(Contexto)
  
  const inputRef = useRef(null);
  return (
    <div className={styles.añadirContainer}>
      <form className={styles.añadir} onSubmit={(ev) => ev.preventDefault()}>
        <h1 className={styles.añadirTittle}>Agregar tarea</h1>
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
            (miTarea === "" ? alert("Por favor completar todos los campos") : añadir()
            );
          }}
        >
          <RiAddBoxFill size={30} />
        </button>
      </form>
      {tareas.map((tarea) => (
        <Tareas key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default ListaDeTareas;

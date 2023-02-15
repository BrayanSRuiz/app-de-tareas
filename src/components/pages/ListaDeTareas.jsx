import { useContext, useRef } from "react";
import styles from "./styles/ListaDeTareas.module.css";
import { RiAddBoxFill } from "react-icons/ri";
import Tareas from "./Tareas";
import { Contexto } from "../../context/Contexto";

const ListaDeTareas = () => {
  const {añadir, tareas, miTarea, setMiTarea, miPrioridad, setMiPrioridad, usuario, logout} = useContext(Contexto)

  const handleLogout = async () => {
    await logout()
  }
  
  const inputRef = useRef(null);
  return (
    <div>
      <h1 className={styles.name}>Welcome {usuario.email} </h1>
      <button onClick={handleLogout}>Sign Out</button>
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
    </div>
    
  );
};

export default ListaDeTareas;

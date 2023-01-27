import { RiDeleteBack2Fill } from "react-icons/ri";
import types from "./types";
import styles from "./styles/Tareas.module.css";

const Tareas = ({ tarea, dispatch }) => {
  const nombre = tarea.nombre;
  const nombreCompleto =
    nombre.substring(0, 1).toUpperCase() + nombre.substring(1).toLowerCase();

  const prioridad = tarea.prioridad;
  const prioridadCompleto =
    prioridad.substring(0, 1).toUpperCase() +
    prioridad.substring(1).toLowerCase();

  return (
    <div className={styles.tareaContenedor}>
      <div className={styles.tareaTitleContainer}>
        <h1 className={styles.tareaTitle}>Tarea</h1>
        <p className={styles.tareaNombre}>{nombreCompleto}</p>
      </div>
      <div className={styles.tareaPrioridad}>
        Prioridad: {prioridadCompleto}
      </div>
      <div
        className={styles.tareaBoton}
        onClick={() => {
          dispatch({ type: types.borrar, payload: tarea.id });
        }}
      >
        <RiDeleteBack2Fill size="30px" />
      </div>
    </div>
  );
};

export default Tareas;

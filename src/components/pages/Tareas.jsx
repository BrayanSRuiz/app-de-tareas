import { RiDeleteBack2Fill } from "react-icons/ri";
import styles from "./styles/Tareas.module.css";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

const Tareas = ({ tarea }) => {
  const { borrar } = useContext(Contexto);
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
        <div>
          Prioridad:{" "}
          <span
            className={`${
              prioridadCompleto === "Baja"
                ? styles.tareaPrioridadBaja
                : prioridadCompleto === "Media"
                ? styles.tareaPrioridadMedia
                : prioridadCompleto === "Alta"
                ? styles.tareaPrioridadAlta
                : null
            }`}
          >
            {prioridadCompleto}
          </span>
        </div>
        <RiDeleteBack2Fill
          size="30px"
          className={styles.tareaBoton}
          onClick={() => {
            borrar(tarea);
          }}
        />
      </div>
    </div>
  );
};

export default Tareas;

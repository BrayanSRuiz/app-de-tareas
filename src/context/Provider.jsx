import React, { useEffect, useReducer, useState } from "react";
import { Contexto } from "./Contexto";
import { miReducer, types } from "./miReducer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const valorInicial = [];

const Provider = ({ children }) => {
  const [miTarea, setMiTarea] = useState("");
  const [miPrioridad, setMiPrioridad] = useState("baja");
  const [tareas, dispatch] = useReducer(miReducer, valorInicial);
  const [usuario, setUsuario] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const añadir = () => {
    const action = {
      type: types.añadir,
      payload: {
        id: Date.now(),
        nombre: miTarea,
        prioridad: miPrioridad,
      },
    };
    dispatch(action);
  };

  const borrar = (tarea) => {
    const action = {
      type: types.borrar,
      payload: tarea.id,
    };
    dispatch(action);
  };

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUsuario(currentUser)
    })
  }, [])
  return (
    <Contexto.Provider
      value={{
        tareas,
        añadir,
        borrar,
        miTarea,
        miPrioridad,
        setMiTarea,
        setMiPrioridad,
        user,
        setUser,
        signUp,
        login,
        usuario,
        logout,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export default Provider;

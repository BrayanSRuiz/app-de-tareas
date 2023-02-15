import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/Contexto";
import Alert from "./Alert";
import styles from './styles/Login.module.css'

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { user, setUser, signUp } = useContext(Contexto);
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.loginTitle}>Register</h1>
      {error && <Alert message={error} />}
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />

        <button className={styles.boton}>Register</button>
      </form>
    </div>
  );
};

export default Register;

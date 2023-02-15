import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/Contexto";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { user, setUser, signUp } = useContext(Contexto);
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signUp(user.email, user.password);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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

      <button>Register</button>
    </form>
    </div>
    
  );
};

export default Register;

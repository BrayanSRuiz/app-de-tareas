import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../../context/Contexto";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { user, setUser, login, loginWitcGoogle } = useContext(Contexto);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try { 
      await login(user.email, user.password);
      
    } catch (error) {
      setError(error.message)
    }
  };

  const handleGoogleSingIn = async () => {
    try {
     await loginWitcGoogle()
      navigate("/", { replace: true });
    } catch (error){
      setError(error.message)
    }
  }

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

      <button>Login</button>
    </form>
    <button onClick={handleGoogleSingIn}>Login witch Google</button>
    </div>
    
  );
};

export default Login;

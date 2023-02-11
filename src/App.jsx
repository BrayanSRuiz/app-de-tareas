import ListaDeTareas from "./components/ListaDeTareas";
import styles from "./App.module.css";
import Provider from "./context/Provider";
import Router from "./routes/Router";

function App() {
  return (
    <div className={styles.app}>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;

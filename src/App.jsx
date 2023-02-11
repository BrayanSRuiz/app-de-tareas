import ListaDeTareas from "./components/ListaDeTareas";
import styles from "./App.module.css";
import Provider from "./context/Provider";

function App() {
  return (
    <div className={styles.app}>
      <Provider>
        <ListaDeTareas />
      </Provider>
    </div>
  );
}

export default App;

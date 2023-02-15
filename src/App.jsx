import styles from "./App.module.css";
import Provider from "./context/Provider";
import Router from "./components/routes/Routes";

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

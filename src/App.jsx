import Provider from "./context/Provider";
import Router from "./components/Routes/Router";

function App() {
  return (
    <div>
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;

import "./App.css";
import DataTable from "./components/DataTable";
import Counter from "./components/Counter";
import BackgroundColors from "./components/BackgroundColors";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h2>Frontend is loaded!</h2>
      <DataTable />
      <hr />
      <Counter />
      <Form />
    </div>
  );
}

export default App;

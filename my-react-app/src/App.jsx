import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";
import PeopleList from "./PeopleList";

function App() {
  return (
    <div className="container mt-5">
      <Counter />
      <PeopleList />
    </div>
  );
}

export default App;

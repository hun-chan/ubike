import Navbar from "./components/Navbar";
import StationSearch from "./pages/StationSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <StationSearch/>
      </div>
    </div>
  );
}

export default App;


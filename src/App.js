import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;

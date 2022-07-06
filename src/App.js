import Navbar from "./Components/Navbar";
import './app.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Components/Pages/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={Home} />
      </Routes>
    </Router>
  );
}

export default App;

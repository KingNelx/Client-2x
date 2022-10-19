import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" />
    </Routes>
   </Router>
  );
}

export default App;
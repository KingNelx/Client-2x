import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import AdminForm from './Components/AdminForm';
import AdminReg from './Components/AdminReg';
import StudentForm from './Components/StudentForm';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Adminform" element={<AdminForm />} />
      <Route path="Studentform" element={<StudentForm />} />
      <Route path="AdminReg" element={<AdminReg />} />
      <Route path="StudentReg" element={<StudentForm />} />
    </Routes>
   </Router>
  );
}

export default App;
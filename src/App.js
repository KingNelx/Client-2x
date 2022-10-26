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
import StudentReg from './Components/StudentReg';
import StudentTopNav from './Student/StudentTopNav';
import AdminTopNav from './Admin/AdminTopNav';
import StudentDashB from './Student/StudentDashB';
import Bsis1 from './BSIS/Bsis1';
import Bsis2 from './BSIS/Bsis2';
import AllStudents from './BSIS/AllStudents';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Adminform" element={<AdminForm />} />
      <Route path="Studentform" element={<StudentForm />} />
      <Route path="AdminReg" element={<AdminReg />} />
      <Route path="StudentReg" element={<StudentReg />} />
      <Route path="studentHOME" element={<StudentTopNav />} />
      <Route path="adminHOME" element={<AdminTopNav />} />
      <Route path="adminDashB"  element={<StudentDashB />} />
      <Route path="bsis1" element={<Bsis1 />} />
      <Route path="bsis2" element={<Bsis2 />} />
      <Route path="allStudents" element={<AllStudents />} />
    </Routes>
   </Router>
  );
}

export default App;
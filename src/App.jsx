import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";


const Appointments = () => <h1>Appointments Page</h1>;
const MyAppointments = () => <h1>My Appointments Page</h1>;

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetail />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

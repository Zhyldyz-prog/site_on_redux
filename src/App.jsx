import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Doctors = () => <h1>Doctors Page</h1>;
const Appointments = () => <h1>Appointments Page</h1>;
const MyAppointments = () => <h1>My Appointments Page</h1>;

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

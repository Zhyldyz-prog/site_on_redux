import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/home.css";

const Home = () => {
  const theme = useSelector(state => state.ui.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <main className="home container">
      <h1>Welcome to SmartClinic</h1>
      <p>Your trusted premium healthcare platform.</p>

      <div className="home-buttons">
        <button className="primary-btn">Book Appointment</button>
        <button className="secondary-btn">View Doctors</button>
      </div>
    </main>
  );
};

export default Home;

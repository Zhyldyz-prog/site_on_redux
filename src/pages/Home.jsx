import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClinicData } from "../features/clinic/clinicSlice";
import "../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.ui.theme);
  const { doctors, services, status } = useSelector(state => state.clinic);

  useEffect(() => {
    document.body.className = theme;
    dispatch(loadClinicData());
  }, [dispatch, theme]);

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health Comes First</h1>
          <p>Premium healthcare services with the best specialists.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Book Appointment</button>
            <button className="secondary-btn">View Doctors</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container">
        <h2 className="section-title">Our Services</h2>

        {status === "loading" ? (
          <p className="loading">Loading services...</p>
        ) : (
          <div className="grid">
            {services.slice(0, 3).map(service => (
              <div key={service.id} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DOCTORS */}
      <section className="section container">
        <h2 className="section-title">Top Doctors</h2>

        {status === "loading" ? (
          <p className="loading">Loading doctors...</p>
        ) : (
          <div className="grid">
            {doctors.slice(0, 3).map(doc => (
              <div key={doc.id} className="card doctor-card">
                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>
                <span>{doc.experience}</span>
              </div>
            ))}
          </div>
        )}
      </section>

    </main>
  );
};

export default Home;

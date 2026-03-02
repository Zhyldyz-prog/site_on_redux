import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClinicData } from "../features/clinic/clinicSlice";
import { Link } from "react-router-dom";
import "../styles/doctors.css";

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors, status } = useSelector(state => state.clinic);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("all");

  useEffect(() => {
    dispatch(loadClinicData());
  }, [dispatch]);

  // Получаем уникальные специальности для фильтра
  const specialties = ["all", ...new Set(doctors.map(doc => doc.specialty))];

  // Фильтруем докторов
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === "all" || doc.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="doctors-page">
      <div className="container">
        <h1>Our Specialists</h1>
        
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <select 
            value={filterSpecialty}
            onChange={(e) => setFilterSpecialty(e.target.value)}
            className="specialty-filter"
          >
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>
                {specialty === "all" ? "All Specialties" : specialty}
              </option>
            ))}
          </select>
        </div>

        {status === "loading" ? (
          <p className="loading">Loading doctors...</p>
        ) : (
          <div className="doctors-grid">
            {filteredDoctors.map(doc => (
              <div key={doc.id} className="doctor-card">
                <div className="doctor-avatar">
                  {doc.name.charAt(0)}
                </div>
                <h3>{doc.name}</h3>
                <p className="specialty">{doc.specialty}</p>
                <p className="experience">{doc.experience} years experience</p>
                <p className="description">{doc.description}</p>
                <Link to={`/doctors/${doc.id}`} className="btn-view">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadClinicData } from "../features/clinic/clinicSlice";
import { Link } from "react-router-dom";

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector(state => state.clinic);

  useEffect(() => {
    dispatch(loadClinicData());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Doctors List</h1>
      {doctors.map(doc => (
        <div key={doc.id}>
          <h3>{doc.name}</h3>
          <p>{doc.specialty}</p>
          <Link to={`/doctors/${doc.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Doctors;

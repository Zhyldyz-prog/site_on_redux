import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadDoctorDetail } from "../features/clinic/clinicSlice";

const DoctorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector(state => state.clinic.selectedDoctor);

  useEffect(() => {
    dispatch(loadDoctorDetail(id));
  }, [dispatch, id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{doctor.name}</h1>
      <p>Specialty: {doctor.specialty}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>{doctor.description}</p>
    </div>
  );
};

export default DoctorDetail;

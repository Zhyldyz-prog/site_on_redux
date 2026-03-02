import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment, editAppointment } from "../features/appointments/appointmentsSlice";
import "../styles/appointmentForm.css";

const AppointmentForm = ({ appointment, onClose }) => {
  const dispatch = useDispatch();
  const { doctors } = useSelector(state => state.clinic);
  
  const [formData, setFormData] = useState({
    patientName: appointment?.patientName || "",
    doctorId: appointment?.doctorId || "",
    doctorName: appointment?.doctorName || "",
    date: appointment?.date || "",
    time: appointment?.time || "",
    reason: appointment?.reason || ""
  });

  const handleDoctorChange = (e) => {
    const doctorId = Number(e.target.value);
    const selectedDoctor = doctors.find(doc => doc.id === doctorId);
    setFormData({
      ...formData,
      doctorId,
      doctorName: selectedDoctor?.name || ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (appointment) {
      dispatch(editAppointment({ id: appointment.id, ...formData }));
    } else {
      dispatch(addAppointment(formData));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h2>{appointment ? "Edit Appointment" : "New Appointment"}</h2>
      
      <div className="form-group">
        <label>Patient Name:</label>
        <input
          type="text"
          value={formData.patientName}
          onChange={(e) => setFormData({...formData, patientName: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label>Doctor:</label>
        <select 
          value={formData.doctorId} 
          onChange={handleDoctorChange}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map(doc => (
            <option key={doc.id} value={doc.id}>
              {doc.name} - {doc.specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({...formData, time: e.target.value})}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Reason:</label>
        <textarea
          value={formData.reason}
          onChange={(e) => setFormData({...formData, reason: e.target.value})}
          rows="3"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {appointment ? "Update" : "Create"} Appointment
        </button>
        <button type="button" className="btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
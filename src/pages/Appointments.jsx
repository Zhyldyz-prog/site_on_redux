import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  loadAppointments, 
  removeAppointment,
  selectAppointment,
  clearSelectedAppointment
} from "../features/appointments/appointmentsSlice";
import AppointmentForm from "../components/AppointmentForm";
import "../styles/appointments.css";

const Appointments = () => {
  const dispatch = useDispatch();
  const { items: appointments, status } = useSelector(state => state.appointments);
  const [showForm, setShowForm] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    dispatch(loadAppointments());
  }, [dispatch]);

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch(removeAppointment(id));
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingAppointment(null);
    dispatch(clearSelectedAppointment());
  };

  const getStatusClass = (status) => {
    switch(status) {
      case "scheduled": return "status-scheduled";
      case "completed": return "status-completed";
      case "cancelled": return "status-cancelled";
      default: return "";
    }
  };

  return (
    <div className="appointments-page">
      <div className="container">
        <div className="appointments-header">
          <h1>My Appointments</h1>
          <button 
            className="btn-primary"
            onClick={() => setShowForm(true)}
          >
            + New Appointment
          </button>
        </div>

        {status === "loading" ? (
          <p className="loading">Loading appointments...</p>
        ) : (
          <div className="appointments-list">
            {appointments.length === 0 ? (
              <p className="no-appointments">No appointments found</p>
            ) : (
              appointments.map(app => (
                <div key={app.id} className="appointment-card">
                  <div className="appointment-header">
                    <h3>{app.patientName}</h3>
                    <span className={`status-badge ${getStatusClass(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="appointment-details">
                    <p><strong>Doctor:</strong> {app.doctorName}</p>
                    <p><strong>Date:</strong> {app.date} at {app.time}</p>
                    <p><strong>Reason:</strong> {app.reason}</p>
                  </div>

                  <div className="appointment-actions">
                    <button 
                      className="btn-edit"
                      onClick={() => handleEdit(app)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(app.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <AppointmentForm 
                appointment={editingAppointment}
                onClose={handleCloseForm}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
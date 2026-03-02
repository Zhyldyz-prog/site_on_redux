import data from "../data/clinicData.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Существующие методы
export const fetchClinicData = async () => {
  await delay(1000);
  return data;
};

export const fetchDoctorById = async (id) => {
  await delay(500);
  return data.doctors.find(doc => doc.id === Number(id));
};

// НОВЫЕ МЕТОДЫ ДЛЯ CRUD APPOINTMENTS
export const fetchAppointments = async () => {
  await delay(800);
  // Имитация: получаем appointments из JSON
  return data.appointments || [];
};

export const createAppointment = async (appointmentData) => {
  await delay(800);
  // Имитация создания
  const newAppointment = {
    id: Date.now(), // генерация ID
    ...appointmentData,
    status: "scheduled"
  };
  return newAppointment;
};

export const updateAppointment = async ({ id, ...updates }) => {
  await delay(800);
  // Имитация обновления
  return { id, ...updates };
};

export const deleteAppointment = async (id) => {
  await delay(800);
  return id;
};
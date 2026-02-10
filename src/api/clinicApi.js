import data from "../data/clinicData.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchClinicData = async () => {
  await delay(1000);
  return data;
};

export const fetchDoctorById = async (id) => {
  await delay(500);
  return data.doctors.find(doc => doc.id === Number(id));
};

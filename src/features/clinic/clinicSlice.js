import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchClinicData, fetchDoctorById } from "../../api/clinicApi";

export const loadClinicData = createAsyncThunk(
  "clinic/loadData",
  async () => {
    return await fetchClinicData();
  }
);

export const loadDoctorDetail = createAsyncThunk(
  "clinic/loadDoctorDetail",
  async (id) => {
    return await fetchDoctorById(id);
  }
);

const clinicSlice = createSlice({
  name: "clinic",
  initialState: {
    doctors: [],
    services: [],
    selectedDoctor: null,
    status: "idle"
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadClinicData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadClinicData.fulfilled, (state, action) => {
        state.status = "success";
        state.doctors = action.payload.doctors;
        state.services = action.payload.services;
      })
      .addCase(loadDoctorDetail.fulfilled, (state, action) => {
        state.selectedDoctor = action.payload;
      });
  }
});

export default clinicSlice.reducer;

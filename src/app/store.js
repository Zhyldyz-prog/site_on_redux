import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";
import clinicReducer from "../features/clinic/clinicSlice";
import appointmentsReducer from "../features/appointments/appointmentsSlice"; 

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    clinic: clinicReducer,
    appointments: appointmentsReducer 
  }
});
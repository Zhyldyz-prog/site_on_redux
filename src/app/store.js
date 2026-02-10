import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";
import clinicReducer from "../features/clinic/clinicSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    clinic: clinicReducer
  }
});

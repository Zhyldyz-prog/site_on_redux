import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  fetchAppointments, 
  createAppointment, 
  updateAppointment, 
  deleteAppointment 
} from "../../api/clinicApi";

// CREATE
export const addAppointment = createAsyncThunk(
  "appointments/add",
  async (appointmentData) => {
    return await createAppointment(appointmentData);
  }
);

// READ
export const loadAppointments = createAsyncThunk(
  "appointments/load",
  async () => {
    return await fetchAppointments();
  }
);

// UPDATE
export const editAppointment = createAsyncThunk(
  "appointments/edit",
  async ({ id, ...updates }) => {
    return await updateAppointment({ id, ...updates });
  }
);

// DELETE
export const removeAppointment = createAsyncThunk(
  "appointments/remove",
  async (id) => {
    await deleteAppointment(id);
    return id;
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    items: [],
    selectedAppointment: null,
    status: "idle",
    error: null
  },
  reducers: {
    selectAppointment: (state, action) => {
      state.selectedAppointment = state.items.find(
        app => app.id === action.payload
      );
    },
    clearSelectedAppointment: (state) => {
      state.selectedAppointment = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // LOAD (READ all)
      .addCase(loadAppointments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadAppointments.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(loadAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      // CREATE
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      
      // UPDATE
      .addCase(editAppointment.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          app => app.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        if (state.selectedAppointment?.id === action.payload.id) {
          state.selectedAppointment = action.payload;
        }
      })
      
      // DELETE
      .addCase(removeAppointment.fulfilled, (state, action) => {
        state.items = state.items.filter(
          app => app.id !== action.payload
        );
        if (state.selectedAppointment?.id === action.payload) {
          state.selectedAppointment = null;
        }
      });
  }
});

export const { selectAppointment, clearSelectedAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
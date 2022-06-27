import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const datesInsert = createAsyncThunk(
  "datesSlice/datesInsert",
  async (data) => {
    var response = await httpClientService.post(`dates/createDates`, data);
    return response.data;
  }
);

const initialState = {};

const datesSlice = createSlice({
  name: "dates",
  initialState: initialState,
  reducers: {},
});

export default datesSlice.reducer;

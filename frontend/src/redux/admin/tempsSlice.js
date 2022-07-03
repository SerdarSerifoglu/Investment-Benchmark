import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const tempsInsert = createAsyncThunk(
  "tempsSlice/tempsInsert",
  async (data) => {
    var response = await httpClientService.get(`temps`);
    return response.data;
  }
);
export const tempsInsertV2 = createAsyncThunk(
  "tempsSlice/tempsInsert",
  async (data) => {
    var response = await httpClientService.get(`temps/v2`);
    return response.data;
  }
);

const initialState = {};

const tempsSlice = createSlice({
  name: "temps",
  initialState: initialState,
  reducers: {},
});

export default tempsSlice.reducer;

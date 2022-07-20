import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const mainDataHisse = createAsyncThunk(
  "mainDataSlice/mainDataHisse",
  async (data) => {
    var response = await httpClientService.get(`md/testCsv`);
    return response.data;
  }
);
export const mainDataInvesting = createAsyncThunk(
  "mainDataSlice/mainDataInvesting",
  async (data) => {
    var response = await httpClientService.get(`md/testCsvInvest`);
    return response.data;
  }
);

const initialState = {};

const mainDataSlice = createSlice({
  name: "mainData",
  initialState: initialState,
  reducers: {},
});

export default mainDataSlice.reducer;

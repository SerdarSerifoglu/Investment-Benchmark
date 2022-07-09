import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const RevenueReportFilter = (state) =>
  state.reportFilters.RevenueReportFilter;
export const CumulativeReportFilter = (state) =>
  state.reportFilters.CumulativeReportFilter;
export const RevenueReportData = (state) =>
  state.reportFilters.RevenueReportData;
export const CumulativeReportData = (state) =>
  state.reportFilters.CumulativeReportData;
export const investmentTypeInputCount = (state) =>
  state.reportFilters.investmentTypeInputCountForCumulativeReportFilter;

const converterForInvestmentType = (object) => {
  var _object = { ...object };
  var keysArray = [
    "investmentType_1",
    "investmentType_2",
    "investmentType_3",
    "investmentType_4",
    "investmentType_5",
  ];
  for (let i = 0; i < keysArray.length; i++) {
    const element = keysArray[i];
    var keys = Object.keys(_object).filter((e) => e.includes(element));
    if (keys.length == 2) {
      if (
        Object.hasOwn(_object, element) &&
        Object.hasOwn(_object, `${element}_rate`)
      ) {
        if (
          _object[`${element}_rate`] == "" ||
          _object[`${element}`] == null ||
          _object[`${element}`] == ""
        ) {
          delete _object[keys[0]];
          delete _object[keys[1]];
          continue;
        }
        _object[`${element}_rate`] = parseFloat(_object[`${element}_rate`]);
      }
    } else if (keys.length == 1) {
      delete _object[keys[0]];
      continue;
    }
  }
  validationInvestmentTypeRate(_object);
  _object = createObjArrayForInvestmentType(_object);
  return _object;
};

const validationInvestmentTypeRate = (object) => {
  var _object = { ...object };
  var keysArray = [
    "investmentType_1_rate",
    "investmentType_2_rate",
    "investmentType_3_rate",
    "investmentType_4_rate",
    "investmentType_5_rate",
  ];
  var investmentTypeRatesSum = 0.0;
  Object.entries(_object).forEach(([key, value]) => {
    if (keysArray.indexOf(key) != -1) {
      investmentTypeRatesSum += value;
    }
  });
  if (investmentTypeRatesSum != 100) {
    throw Error("Oran toplam 100 olmalıdır");
  }
};

const createObjArrayForInvestmentType = (object) => {
  var _object = { ...object };
  var keysArray = [
    "investmentType_1",
    "investmentType_2",
    "investmentType_3",
    "investmentType_4",
    "investmentType_5",
  ];
  _object["investmentTypeObjects"] = [];
  for (let i = 0; i < keysArray.length; i++) {
    const element = keysArray[i];
    var keys = Object.keys(_object).filter((e) => e.includes(element));
    if (keys.length == 2) {
      _object["investmentTypeObjects"].push({
        [`${element}`]: _object[`${element}`],
        [`${element}_rate`]: _object[`${element}_rate`],
      });
    }
  }

  return _object;
};

export const getCumulativeReportData = createAsyncThunk(
  "reportFilters/getCumulativeReportData",
  async (filterData) => {
    try {
      var convertedData = converterForInvestmentType(filterData);

      const { data } = await httpClientService.post(
        `/report/cumulative-report`,
        convertedData
      );
      return data;
    } catch (error) {
      alert(error.message);
      return {};
    }
  }
);
export const getRevenueReportData = createAsyncThunk(
  "reportFilters/getRevenueReportData",
  async (filterData) => {
    const { data } = await httpClientService.post(
      `/report/revenue-report`,
      filterData
    );
    return data;
  }
);

const initialState = {
  RevenueReportFilter: {},
  RevenueReportData: [],
  CumulativeReportFilter: { improveRate: 0 },
  CumulativeReportData: {},
  investmentTypeInputCountForCumulativeReportFilter: 1,
};

const reportFiltersSlice = createSlice({
  name: "reportFilters",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      const { fieldProperty, value, stateName } = action.payload;
      var keysArray = [
        "investmentType_1",
        "investmentType_2",
        "investmentType_3",
        "investmentType_4",
        "investmentType_5",
      ];
      if (keysArray.includes(fieldProperty)) {
        var exist = Object.values(state[stateName]).includes(value);
        if (exist) {
          return;
        }
      }

      state[stateName][fieldProperty] = value;
    },
    deleteInvestmentTypeReportFilter: (state, action) => {
      const { propertyNameToBeDeleted, stateName } = action.payload;
      for (let i = 0; i < propertyNameToBeDeleted.length; i++) {
        const element = propertyNameToBeDeleted[i];
        delete state[stateName][element];
      }
    },
    changeInvestmentTypeInputCount: (state, action) => {
      const value = action.payload;
      state.investmentTypeInputCountForCumulativeReportFilter = value;
    },
  },
  extraReducers: {
    [getCumulativeReportData.fulfilled]: (state, action) => {
      state.CumulativeReportData = action.payload;
    },
    [getRevenueReportData.fulfilled]: (state, action) => {
      state.RevenueReportData = action.payload;
    },
  },
});

export const {
  changeReportFilter,
  deleteInvestmentTypeReportFilter,
  changeInvestmentTypeInputCount,
} = reportFiltersSlice.actions;
export default reportFiltersSlice.reducer;

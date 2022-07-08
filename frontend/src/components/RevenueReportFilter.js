import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button, Grid } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getRevenueReportData,
  RevenueReportFilter as RRF,
} from "../redux/reportFilters/reportFiltersSlice";
import TextFieldNumber from "./TextFieldNumber";
import { componentNames } from "../helpers/statics";

const RevenueReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(RRF);

  const buttonClickEvent = () => {
    dispatch(getRevenueReportData(reportFilterData));
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AutocompleteMultiSelect
            fieldProperty="investmentType"
            valueProperty={reportFilterData["investmentType"]}
            stateName={componentNames.RevenueReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <DatePicker
            fieldProperty="startDate"
            valueProperty={reportFilterData["startDate"]}
            stateName={componentNames.RevenueReportFilter}
          />
          <DatePicker
            fieldProperty="endDate"
            valueProperty={reportFilterData["endDate"]}
            stateName={componentNames.RevenueReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <TextFieldNumber
            labelName="Yatırım Miktarı"
            fieldProperty="investmentAmount"
            valueProperty={reportFilterData["investmentAmount"]}
            stateName={componentNames.RevenueReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={buttonClickEvent}>
            Hesapla
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default RevenueReportFilter;

import AutocompleteSelect from "./AutocompleteSelect";
import { Button, Grid } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getCumulativeReportData,
  CumulativeReportFilter as CRF,
} from "../redux/reportFilters/reportFiltersSlice";
import TextFieldNumber from "./TextFieldNumber";
import { componentNames } from "../helpers/statics";

const CumulativeReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(CRF);

  const buttonClickEvent = () => {
    dispatch(getCumulativeReportData(reportFilterData));
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AutocompleteSelect
            fieldProperty="investmentType"
            valueProperty={reportFilterData["investmentType"]}
            stateName={componentNames.CumulativeReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <DatePicker
            fieldProperty="startDate"
            valueProperty={reportFilterData["startDate"]}
            stateName={componentNames.CumulativeReportFilter}
          />
          <DatePicker
            fieldProperty="endDate"
            valueProperty={reportFilterData["endDate"]}
            stateName={componentNames.CumulativeReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <TextFieldNumber
            fieldProperty="investmentAmount"
            valueProperty={reportFilterData["investmentAmount"]}
            stateName={componentNames.CumulativeReportFilter}
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
export default CumulativeReportFilter;

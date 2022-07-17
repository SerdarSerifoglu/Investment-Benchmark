import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button, Grid } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getInvestmentTools,
  InvestmentToolsFilter as ITF,
  assignDefaultStartDate,
  assignDefaultEndDate,
} from "../redux/reportFilters/reportFiltersSlice";
import { componentNames } from "../helpers/statics";
import { useEffect } from "react";

const InvestmentToolsFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(ITF);

  useEffect(() => {
    if (!reportFilterData["startDate"]) {
      dispatch(
        assignDefaultStartDate({
          stateName: componentNames.InvestmentToolsFilter,
          value: "2022-06-01",
        })
      );
      dispatch(
        assignDefaultEndDate({
          stateName: componentNames.InvestmentToolsFilter,
          value: "2022-06-30",
        })
      );
    }
  }, []);

  const buttonClickEvent = () => {
    dispatch(getInvestmentTools(reportFilterData));
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AutocompleteMultiSelect
            fieldProperty="investmentType"
            valueProperty={reportFilterData["investmentType"]}
            stateName={componentNames.InvestmentToolsFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <DatePicker
            fieldProperty="startDate"
            valueProperty={reportFilterData["startDate"]}
            stateName={componentNames.InvestmentToolsFilter}
            labelValue="Başlangıç Tarihi"
          />
          <DatePicker
            fieldProperty="endDate"
            valueProperty={reportFilterData["endDate"]}
            stateName={componentNames.InvestmentToolsFilter}
            labelValue="Bitiş Tarihi"
          />
        </Grid>

        <Grid item xs={8}>
          <Button variant="contained" onClick={buttonClickEvent}>
            GETİR
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default InvestmentToolsFilter;

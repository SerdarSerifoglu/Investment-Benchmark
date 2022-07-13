import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button, Grid } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getInvestmentTools,
  InvestmentToolsFilter as ITF,
} from "../redux/reportFilters/reportFiltersSlice";
import TextFieldNumber from "./TextFieldNumber";
import { componentNames } from "../helpers/statics";

const InvestmentToolsFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(ITF);

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
          />
          <DatePicker
            fieldProperty="endDate"
            valueProperty={reportFilterData["endDate"]}
            stateName={componentNames.InvestmentToolsFilter}
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

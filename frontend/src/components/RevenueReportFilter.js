import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button, TextField } from "@mui/material";
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
      <div>
        <AutocompleteMultiSelect
          fieldProperty="investmentType"
          valueProperty={reportFilterData["investmentType"]}
          stateName={componentNames.RevenueReportFilter}
        />
      </div>
      <br />
      <div>
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
      </div>
      <br />
      <div>
        <TextFieldNumber
          labelName="Yatırım Miktarı"
          fieldProperty="investmentAmount"
          valueProperty={reportFilterData["investmentAmount"]}
          stateName={componentNames.RevenueReportFilter}
        />
      </div>
      <br />
      <Button variant="contained" onClick={buttonClickEvent}>
        Hesapla
      </Button>
    </>
  );
};
export default RevenueReportFilter;

import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getRevenueReportData,
  RevenueReportFilter as RRF,
} from "../redux/reportFilters/reportFiltersSlice";
import TextFieldNumber from "./TextFieldNumber";

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
          stateName={RevenueReportFilter.name}
        />
      </div>
      <br />
      <div>
        <DatePicker
          fieldProperty="startDate"
          valueProperty={reportFilterData["startDate"]}
          stateName={RevenueReportFilter.name}
        />
        <DatePicker
          fieldProperty="endDate"
          valueProperty={reportFilterData["endDate"]}
          stateName={RevenueReportFilter.name}
        />
      </div>
      <br />
      <div>
        <TextFieldNumber
          fieldProperty="investmentAmount"
          valueProperty={reportFilterData["investmentAmount"]}
          stateName={RevenueReportFilter.name}
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

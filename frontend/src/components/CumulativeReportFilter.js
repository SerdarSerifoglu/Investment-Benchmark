import AutocompleteMultiSelect from "./AutocompleteMultiSelect";
import { Button } from "@mui/material";
import { DatePicker } from "./DatePicker";

const CumulativeReportFilter = () => {
  return (
    <>
      <AutocompleteMultiSelect fieldProperty="investmentType" />
      <DatePicker fieldProperty="startDate" />
      <DatePicker fieldProperty="endDate" />
      <Button variant="contained">Hesapla</Button>
    </>
  );
};
export default CumulativeReportFilter;

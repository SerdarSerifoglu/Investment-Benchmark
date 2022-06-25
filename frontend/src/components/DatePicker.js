import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";

export const DatePicker = ({ fieldProperty }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="date"
      id={fieldProperty}
      name={fieldProperty}
      onChange={(e) => {
        console.log("date", e.target.value);
        dispatch(changeReportFilter({ fieldProperty, value: e.target.value }));
      }}
    ></input>
  );
};

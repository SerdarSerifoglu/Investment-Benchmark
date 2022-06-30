import { useDispatch } from "react-redux";
import { changeReportFilter } from "../redux/reportFilters/reportFiltersSlice";

export const DatePicker = ({ fieldProperty, valueProperty, stateName }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="date"
      id={fieldProperty}
      name={fieldProperty}
      defaultValue={valueProperty}
      onChange={(e) => {
        dispatch(
          changeReportFilter({
            fieldProperty,
            value: e.target.value,
            stateName,
          })
        );
      }}
    ></input>
  );
};

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
      min="2000-01-01"
      max="2022-06-28"
      onChange={(e) => {
        //Max Min seçimi düzenlenecek sonradan
        if (parseInt(e.target.value.replaceAll("-", "")) > 20220628) {
          e.target.value = "2022-06-28";
        }
        if (parseInt(e.target.value.replaceAll("-", "")) < 20000101) {
          e.target.value = "2000-01-01";
        }
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

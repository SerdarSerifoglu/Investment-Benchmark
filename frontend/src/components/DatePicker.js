export const DatePicker = ({ fieldProperty }) => {
  return (
    <input
      type="date"
      id={fieldProperty}
      name={fieldProperty}
      onChange={(e) => {
        console.log("date", e.target.value);
      }}
    ></input>
  );
};

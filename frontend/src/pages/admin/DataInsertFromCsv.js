import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { tempsInsert } from "../../redux/admin/tempsSlice";

const DataInsertFromCsv = () => {
  const dispatch = useDispatch();

  const buttonClickEvent = async () => {
    var res = await dispatch(tempsInsert());

    alert(res.payload.message);
  };

  return (
    <>
      <Button variant="contained" onClick={buttonClickEvent}>
        Aktarıma Başla
      </Button>
    </>
  );
};

export default DataInsertFromCsv;

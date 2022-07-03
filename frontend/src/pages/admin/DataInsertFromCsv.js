import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { tempsInsert, tempsInsertV2 } from "../../redux/admin/tempsSlice";

const DataInsertFromCsv = () => {
  const dispatch = useDispatch();

  const buttonClickEvent = async () => {
    var res = await dispatch(tempsInsert());

    alert(res.payload.message);
  };
  const buttonClickEventYHO = async () => {
    var res = await dispatch(tempsInsertV2());

    alert(res.payload.message);
  };

  return (
    <>
      <Button variant="contained" onClick={buttonClickEvent}>
        Aktarıma Başla INVS
      </Button>
      <Button variant="contained" onClick={buttonClickEventYHO}>
        Aktarıma Başla YHO
      </Button>
    </>
  );
};

export default DataInsertFromCsv;

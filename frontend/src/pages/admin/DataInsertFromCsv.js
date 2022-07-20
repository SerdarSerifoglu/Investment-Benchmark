import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { tempsInsert, tempsInsertV2 } from "../../redux/admin/tempsSlice";
import {
  mainDataHisse,
  mainDataInvesting,
} from "../../redux/admin/mainDataSlice";

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

  const buttonClickEventHisse = async () => {
    var res = await dispatch(mainDataHisse());

    alert(res.payload.message);
  };

  const buttonClickEventInvesting = async () => {
    var res = await dispatch(mainDataInvesting());

    alert(res.payload.message);
  };

  return (
    <>
      {/* <Button variant="contained" onClick={buttonClickEvent}>
        Aktarıma Başla INVS
      </Button>
      <Button variant="contained" onClick={buttonClickEventYHO}>
        Aktarıma Başla YHO
      </Button> */}

      <Button variant="contained" onClick={buttonClickEventHisse}>
        Full Aktarım Hisseler
      </Button>
      <Button variant="contained" onClick={buttonClickEventInvesting}>
        Full Aktarım Altın,Gümüş,USD,EUR
      </Button>
    </>
  );
};

export default DataInsertFromCsv;

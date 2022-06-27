import { Outlet } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { datesInsert } from "../../redux/admin/datesSlice";
import { useState } from "react";

const Date = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("20-06-2022");
  const [endDate, setEndDate] = useState("21-06-2022");

  const buttonClickEvent = async () => {
    var res = await dispatch(datesInsert({ startDate, endDate }));
    console.log("res", res);
    alert(res.payload.message);
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Başlangıç Tarihi"
        variant="outlined"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Bitiş Tarihi"
        variant="outlined"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Button variant="contained" onClick={buttonClickEvent}>
        Ekle
      </Button>
      <div>
        Bu ekran verilen tarihler arasındaki bütün günler için(verilen tarihler
        dahil) istediğim formatta veri tabanına her bit gün için kayıtlar
        oluşturma amacıyla yapılmıştır.
      </div>
    </>
  );
};

export default Date;

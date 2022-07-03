import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RevenueReportData } from "../redux/reportFilters/reportFiltersSlice";

const RevenueReportList = () => {
  const reportData = useSelector(RevenueReportData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Yatırım Türü</TableCell>
            <TableCell align="right">İlk Tarih</TableCell>
            <TableCell align="right">İlk Birim Fiyat&nbsp;(₺)</TableCell>
            <TableCell align="right">İlk Yatırım Toplamı&nbsp;(₺)</TableCell>
            <TableCell align="right">Son Tarih</TableCell>
            <TableCell align="right">Son Birim Fiyat&nbsp;(₺)</TableCell>
            <TableCell align="right">
              Son Toplam Yatırım Değeri&nbsp;(₺)
            </TableCell>
            <TableCell align="right">Kazanç Oranı&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((row) => (
            <TableRow
              key={row.investTypeValue}
              placeholder="serdar"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.investTypeValue}
              </TableCell>
              <TableCell align="right">{row.initialDateString}</TableCell>
              <TableCell align="right">{row.initialUnitPriceTL}</TableCell>
              <TableCell align="right">{row.initialValueTL}</TableCell>
              <TableCell align="right">{row.lastDateString}</TableCell>
              <TableCell align="right">{row.lastUnitPriceTL}</TableCell>
              <TableCell align="right">{row.lastValueTL}</TableCell>
              <TableCell align="right">{row.revenueRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RevenueReportList;

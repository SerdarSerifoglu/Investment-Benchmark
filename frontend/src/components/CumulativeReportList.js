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
import { CumulativeReportData } from "../redux/reportFilters/reportFiltersSlice";

const CumulativeReportList = () => {
  const reportData = useSelector(CumulativeReportData);

  return reportData.resultArray == null ? (
    ""
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Yatırım Türü</TableCell>
            <TableCell align="right">Alış Tarihi</TableCell>
            <TableCell align="right">Alış Birim Fiyat</TableCell>
            <TableCell align="right">Son Birim Fiyat</TableCell>
            <TableCell align="right">Kazanç Oranı&nbsp;(%)</TableCell>
            <TableCell align="right">Yatırım Miktarı&nbsp;(₺)</TableCell>
            <TableCell align="right">Alınan Adet</TableCell>
            <TableCell align="right">
              Son Tarih Yatırım Değeri&nbsp;(₺)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.resultArray.map((row) => (
            <TableRow
              key={row.investTypeValue}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.investTypeName}
              </TableCell>
              <TableCell align="right">{row.dateString}</TableCell>
              <TableCell align="right">{row.initialUnitPriceTL}</TableCell>
              <TableCell align="right">{row.lastUnitPriceTL}</TableCell>
              <TableCell align="right">{row.revenueRate}</TableCell>
              <TableCell align="right">{row.investmentAmount}</TableCell>
              <TableCell align="right">{row.investmentTypeUnitCount}</TableCell>
              <TableCell align="right">{row.lastDateInvestmentValue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CumulativeReportList;

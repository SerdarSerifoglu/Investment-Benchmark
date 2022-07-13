import { useSelector } from "react-redux";
import { CumulativeReportData } from "../redux/reportFilters/reportFiltersSlice";
import { Box, Card, CardContent, Grid } from "@mui/material";

const CumulativeReportSummary = () => {
  const reportData = useSelector(CumulativeReportData);

  return reportData.total == null ? (
    ""
  ) : (
    <>
      <Grid container spacing={2} sx={{ mb: "10px" }}>
        {reportData.total.investmentTypesDatas.map((e, i) => (
          <>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 275, maxWidth: 500 }}>
                <Card variant="outlined">
                  <CardContent>
                    <h3>{e.investmentTypeName}</h3>
                    <div key={i}>
                      <div>
                        Birikim Tutarı (₺): <b>{e.investmentAmount}</b>
                      </div>
                      <div>
                        Son Tarihteki Birikim Değeri (₺):{" "}
                        <b>{e.lastDateInvestmentValue}</b>
                      </div>
                      <div>
                        Birikim Getiri Oranı (%): <b>{e.revenueRate}</b>
                      </div>
                      <div>
                        Toplam Birim (Adet,Gr): <b>{e.unitCount}</b>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </>
        ))}{" "}
        <Grid item xs={12}>
          <Box sx={{ minWidth: 275, maxWidth: 500 }}>
            <Card variant="outlined">
              <CardContent>
                <div>{`Toplam Birikim Tutarı (₺): ${reportData.total.investmentAmount}`}</div>
                <div>{`Son Tarihteki Birikim Toplam Değeri (₺): ${reportData.total.lastDateInvestmentValue}`}</div>
                <div>{`Elde Edilen Değer Artışı (%): ${reportData.total.revenueRate}`}</div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CumulativeReportSummary;

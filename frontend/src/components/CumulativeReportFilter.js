import { useEffect } from "react";
import AutocompleteSelect from "./AutocompleteSelect";
import { Button, Grid, Box } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getCumulativeReportData,
  CumulativeReportFilter as CRF,
  deleteInvestmentTypeReportFilter,
  investmentTypeInputCount,
  changeInvestmentTypeInputCount,
  assignDefaultStartDate,
  assignDefaultEndDate,
} from "../redux/reportFilters/reportFiltersSlice";

import TextFieldNumber from "./TextFieldNumber";
import { componentNames } from "../helpers/statics";

import styled from "@emotion/styled";

const CumulativeReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(CRF);
  const investmentTypeInputCountData = useSelector(investmentTypeInputCount);

  useEffect(() => {
    if (!reportFilterData["startDate"]) {
      dispatch(
        assignDefaultStartDate({
          stateName: componentNames.CumulativeReportFilter,
          value: "2022-06-01",
        })
      );
      dispatch(
        assignDefaultEndDate({
          stateName: componentNames.CumulativeReportFilter,
          value: "2022-06-30",
        })
      );
    }
  }, []);

  const buttonClickEvent = () => {
    dispatch(getCumulativeReportData(reportFilterData));
  };

  const plusOrMinusButtonClickEvent = (param) => {
    if (param === 1 && investmentTypeInputCountData === 5) {
      return;
    }
    if (param === -1 && investmentTypeInputCountData === 1) {
      return;
    }
    if (param === -1) {
      dispatch(
        deleteInvestmentTypeReportFilter({
          propertyNameToBeDeleted: [
            `investmentType_${investmentTypeInputCountData}`,
            `investmentType_${investmentTypeInputCountData}_rate`,
          ],
          stateName: componentNames.CumulativeReportFilter,
        })
      );
    }
    dispatch(
      changeInvestmentTypeInputCount(investmentTypeInputCountData + param)
    );
  };

  const investmentTypesPart = () => {
    var resultArray = [];
    for (let i = 1; i <= investmentTypeInputCountData; i++) {
      let propName = `investmentType_${i}`;
      let propNameRate = `investmentType_${i}_rate`;

      resultArray.push(
        <>
          <Grid container spacing={2} sx={{ mb: "10px" }}>
            <Grid item xs={7} md={9}>
              <AutocompleteSelect
                fieldProperty={propName}
                valueProperty={reportFilterData[propName]}
                stateName={componentNames.CumulativeReportFilter}
                labelValue="Başlangıç Tarihi"
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <TextFieldNumber
                labelName="Birikim Oranı"
                fieldProperty={propNameRate}
                valueProperty={reportFilterData[propNameRate] ?? 0}
                stateName={componentNames.CumulativeReportFilter}
                labelValue="Bitiş Tarihi"
              />
            </Grid>
          </Grid>
        </>
      );
    }
    return resultArray;
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {investmentTypesPart()}
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              color="success"
              variant="contained"
              onClick={() => plusOrMinusButtonClickEvent(1)}
            >
              +
            </Button>
            <MinusButton
              color="error"
              variant="contained"
              onClick={() => plusOrMinusButtonClickEvent(-1)}
            >
              -
            </MinusButton>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <DatePicker
            fieldProperty="startDate"
            valueProperty={reportFilterData["startDate"]}
            stateName={componentNames.CumulativeReportFilter}
          />
          <DatePicker
            fieldProperty="endDate"
            valueProperty={reportFilterData["endDate"]}
            stateName={componentNames.CumulativeReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <TextFieldNumber
            labelName="Yatırım Miktarı"
            fieldProperty="investmentAmount"
            valueProperty={reportFilterData["investmentAmount"]}
            stateName={componentNames.CumulativeReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <TextFieldNumber
            labelName="Yıllık Birikim Artış Oranı"
            fieldProperty="improveRate"
            valueProperty={reportFilterData["improveRate"] ?? 0}
            stateName={componentNames.CumulativeReportFilter}
          />
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" onClick={buttonClickEvent}>
            Hesapla
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const MinusButton = styled(Button)`
  margin-left: 10px;
`;

export default CumulativeReportFilter;

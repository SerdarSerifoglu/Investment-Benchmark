import AutocompleteSelect from "./AutocompleteSelect";
import { Button, Grid } from "@mui/material";
import { DatePicker } from "./DatePicker";
import { useSelector, useDispatch } from "react-redux";
import {
  getCumulativeReportData,
  CumulativeReportFilter as CRF,
  deleteInvestmentTypeReportFilter,
  investmentTypeInputCount,
  changeInvestmentTypeInputCount,
} from "../redux/reportFilters/reportFiltersSlice";

import TextFieldNumber from "./TextFieldNumber";
import { componentNames } from "../helpers/statics";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const CumulativeReportFilter = () => {
  const dispatch = useDispatch();
  const reportFilterData = useSelector(CRF);
  const investmentTypeInputCountData = useSelector(investmentTypeInputCount);

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
            <Grid item xs={10}>
              <AutocompleteSelect
                fieldProperty={propName}
                valueProperty={reportFilterData[propName]}
                stateName={componentNames.CumulativeReportFilter}
              />
            </Grid>
            <Grid item xs={2}>
              <TextFieldNumber
                labelName="Birikim Oranı"
                fieldProperty={propNameRate}
                valueProperty={reportFilterData[propNameRate] ?? 0}
                stateName={componentNames.CumulativeReportFilter}
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
        <Grid item xs={6}>
          {investmentTypesPart()}
        </Grid>
        <Grid item xs={2}>
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

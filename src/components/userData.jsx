import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Pagination } from "./pagination";

export const UserData = ({ data, loading }) => {
  const allUserData = data?.users;
  const paginationLength = data?.users?.length / 6;

  const [perPageNumberLastIndex, setPageNumberLastIndex] =
    useState(paginationLength);

  const lastIndex = perPageNumberLastIndex
    ? paginationLength * perPageNumberLastIndex
    : paginationLength;

  const firstIndex = lastIndex ? lastIndex - paginationLength : 0;
  const dataItem = data?.users?.slice(firstIndex, lastIndex);
  return loading ? (
    "Loading..."
  ) : (
    <Grid spacing={2} container>
      {dataItem?.length &&
        dataItem?.map(({ id, firstName, lastName, age, gender }, index) => {
          return (
            <Grid item key={index} xs={3}>
              <Card>
                <CardContent>
                  <Typography>
                    id:<b>{id}</b>
                  </Typography>
                  <Typography variant="h6">
                    Name:<b>{firstName}</b>
                  </Typography>
                  <Typography variant="h6">
                    Surname:<b>{lastName}</b>
                  </Typography>
                  <Typography variant="h6">
                    Age:<b>{age}</b>
                  </Typography>{" "}
                  <Typography variant="h6">
                    Gender:<b>{gender}</b>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      <Pagination
        paginationLength={paginationLength}
        setPageNumberLastIndex={setPageNumberLastIndex}
      />
    </Grid>
  );
};

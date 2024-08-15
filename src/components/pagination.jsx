import { Grid } from "@mui/material";
import React, { useState } from "react";

export const Pagination = ({ paginationLength, setPageNumberLastIndex }) => {
  const pagination = [];
  for (let i = 1; i <= paginationLength; i++) {
    pagination.push(i);
  }

  return (
    <Grid container justifyContent={"center"}>
      <ul style={{ listStyle: "none", display: "flex" }}>
        {pagination.map((item, index) => {
          return (
            <Grid
              item
              border={1}
              borderRadius={"50%"}
              height={25}
              width={25}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              margin={"2px"}
              key={index}
            >
              <li
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => setPageNumberLastIndex(item)}
              >
                {item}
              </li>
            </Grid>
          );
        })}
      </ul>
    </Grid>
  );
};

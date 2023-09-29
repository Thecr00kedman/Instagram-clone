/* eslint-disable no-unused-vars */
import { Box, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  maxWidth: "500px",
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& > div": {
    width: "100%",
    "& > input": {
      padding: "1rem",
      height: "100%",
      flex: 2,
      outline: "none",
      border: "none",
    },
  },
}));

export const Top = styled(Box)(({ theme }) => ({
  "& > small": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Middle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "20rem",
  "& > img": {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

export const Bottom = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  "&> small": {
    fontSize: "0.8rem",
    textAlign: "end",
    flex: 1,
  },
}));

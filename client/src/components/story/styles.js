/* eslint-disable no-unused-vars */
import { styled, Toolbar } from "@mui/material";

export const StyledStory = styled(Toolbar)(({ theme }) => ({
  padding: "0.5rem 2rem",
  display: "flex",
  gap: "2rem",
  overflowX: "scroll",
  background: "white",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
}));

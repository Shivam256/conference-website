import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const MainHeader = styled(Box)(() => ({
  width: "100%",
  height: "fit-content",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
}));

export const HeaderMenu = styled(Box)(() => ({
  width: "100%",
  height: "50px",
  backgroundColor: "yellow",
  display: "flex",
}));

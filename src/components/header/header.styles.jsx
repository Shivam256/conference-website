import { Box, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const MainHeader = styled(Box)(() => ({
  width: "90%",
  height: "fit-content",
  padding: "30px 10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "50px",
}));

export const HeaderMenu = styled(Box)(() => ({
  width: "100%",
  height: "50px",
  backgroundColor: "#1956a0",
  display: "flex",
  justifyContent: "center",
  gap:'20px',
  "& a": {
    color: "#fff",
    textDecoration: "none",
  },
}));

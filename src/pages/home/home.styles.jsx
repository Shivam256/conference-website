import { styled, Box } from "@mui/material";

export const UpperHomeContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  height: "fit-content",
  padding: "20px",
  gap:'20px'
}));

export const SliderContainer = styled(Box)(() => ({
  width: "60%",
  //   height: "fit-content",
  padding: "10px 10px 40px 10px",
  boxShadow: "0px 8px 20px rgba(35, 35, 35, 0.1)",
  borderRadius: "10px",
}));

export const InfoContainer = styled(Box)(() => ({
    width: "40%",
    //   height: "fit-content",
    padding: "10px 10px 40px 10px",
    boxShadow: "0px 8px 20px rgba(35, 35, 35, 0.1)",
    borderRadius: "10px",
  }));
  

export const AboutContainer = styled(Box)(() => ({
  width: "100%",
  height: "fit-content",
  backgroundColor: "#1956a0",
  padding: "30px",
  color: "#fff",
}));

import React from "react";
import { HeaderContainer, HeaderMenu, MainHeader } from "./header.styles";
import { menuData } from "./header.data";
import { Link } from "react-router-dom";
import CustomMenu from "../customMenu/customMenu.component";
import { Button, Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <img src="https://www.vit.edu/images/vit-logo.png" alt="" />
        <Box>
          <Typography>Bansilal Ramnath Agarwal Charitable Trust's</Typography>
          <Typography sx={{ fontSize: "2em" }}>
            Vishwakarma Institute Of Technology
          </Typography>
          <hr />
          <Typography>
            (An Autonomous Institute affiliated to Savitribai Phule Pune
            University)
          </Typography>
        </Box>
      </MainHeader>
      <HeaderMenu>
        {menuData.map((item) => {
          if (item.isMenu) {
            return <CustomMenu item={item} />;
          } else {
            return (
              <Button>
                <Link to={item.link}>{item.title}</Link>
              </Button>
            );
          }
        })}
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;

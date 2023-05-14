import React from "react";
import { HeaderContainer, HeaderMenu, MainHeader } from "./header.styles";
import { menuData } from "./header.data";
import { Link } from "react-router-dom";
import CustomMenu from "../customMenu/customMenu.component";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        <img src="https://www.vit.edu/images/vit-logo.png" alt="" />
        <h1>VIT Pune</h1>
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

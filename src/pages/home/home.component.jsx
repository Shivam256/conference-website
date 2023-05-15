import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { homeImages } from "./home.data";
import { Page } from "../pages.styles";
import {
  AboutContainer,
  InfoContainer,
  SliderContainer,
  UpperHomeContainer,
} from "./home.styles";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <Page>
      <UpperHomeContainer>
        <SliderContainer>
          <Slider {...settings}>
            {homeImages.map((i) => (
              <Box
                sx={{
                  width: "100%",
                  height: "50vh",
                  backgroundColor: "#a4a4a4",
                  backgroundImage: `url('${i}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              />
            ))}
          </Slider>
        </SliderContainer>
        <InfoContainer>
            j3j
        </InfoContainer>
      </UpperHomeContainer>
      <AboutContainer>
        <Typography sx={{ fontSize: "2em", fontWeight: 600 }}>
          ABOUT VIC-23
        </Typography>
        <Typography sx={{ fontSize: "1.1em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nulla reiciendis, aperiam delectus iste consequuntur est rerum,
          asperiores sed id maiores, in odit obcaecati vero quasi praesentium
          possimus at recusandae. Vitae neque rerum praesentium veniam fugit
          nihil illum accusamus, ea ut. Odio, consectetur impedit.
          Necessitatibus odio ad voluptatem harum modi nemo distinctio sequi nam
          maiores! Aspernatur doloremque quidem dolorum veniam. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Praesentium ipsa eos quam
          impedit ex laboriosam labore ut dolores in quos, nesciunt blanditiis,
          excepturi voluptatem laudantium molestias pariatur laborum sed! Itaque
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          eaque asperiores dolore architecto, repellat commodi porro officiis
          quisquam hic impedit recusandae omnis earum quod ea esse
          exercitationem reiciendis. Quia? Doloremque cum non rem. Delectus sunt
          voluptates veniam, harum repudiandae cumque quos placeat tempore
          tenetur quas cupiditate illum quisquam iste reiciendis. Iusto rerum
          officia error dolore ducimus? Libero, est a.
        </Typography>
      </AboutContainer>
    </Page>
  );
};

export default Home;

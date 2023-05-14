import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { homeImages } from "./home.data";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Box sx={{ width: "50vw" }}>
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
              }}
            />
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Home;

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const foodImg = [
  {
    img: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    img: "https://images.pexels.com/photos/253419/pexels-photo-253419.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
function RightBar() {
  return (
    <Box marginTop={2}>
      <Typography>Latest Photos</Typography>
      <ImageList sx={{ width: 250, height: 250 }} cols={2}>
        {foodImg.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default RightBar;

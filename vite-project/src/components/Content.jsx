import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
const Content = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      pt={2}
    >
      <Grid xs={6}>
        <Box>
          <Typography variant="h4">Welcome to My Website</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quam incidunt earum maiores omnis.molestiae accusamus aliquam rerum
            pariatur, esse voluptatum rem ipsa suscipit, hic ut velit? Eos
            doloremque hic autem adipisci expedita quibusdam! Cumque minus,
            placeat accusantium rem eos explicabo. Eaque numquam doloribus,
            repellat optio ratione ab amet assumenda modi suscipit adipisci
            maxime consequuntur expedita.
          </Typography>
          <br />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Nisi omnis, incidunt et, rerum labore obcaecati quam ipsa sequi
            doloribus aliquid deleniti quasi voluptatum id ducimus nulla illum
            reiciendis hic quaerat velit doloremque dolorum aliquam veritatis
            odit? Officiis ad aspernatur beatae ut ullam molestiae, autem labore
            soluta unde consequatur laudantium quae. Error, voluptatibus!
          </Typography>
        </Box>
      </Grid>

      {/* cards */}
      <Grid container xs={6} spacing={2}>
        <Grid item sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="view image"
            />
            <CardContent>
              <Typography variant="h5">Card title</Typography>

              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium veniam blanditiis dicta pariatur. Ullam, nobis?
                Praesentium quae fugiat maiores sapiente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="view image"
            />
            <CardContent>
              <Typography variant="h5">Card title</Typography>

              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium veniam blanditiis dicta pariatur. Ullam, nobis?
                Praesentium quae fugiat maiores sapiente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={6} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="view image"
            />
            <CardContent>
              <Typography variant="h5">Card title</Typography>

              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium veniam blanditiis dicta pariatur. Ullam, nobis?
                Praesentium quae fugiat maiores sapiente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;

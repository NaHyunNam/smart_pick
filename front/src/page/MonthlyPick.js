import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const MonthlyPick = () => {
  const [pickData, setPickData] = useState([]);

  const onClick = (card) => {
    console.log(card);
  }

  const fetch = () => {
    // TODO: API 호출
    setPickData([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <Box height="100vh" display="flex" flexDirection="column" padding="30px">
      <Grid container spacing={4}>
        {pickData.map((data) => (
          <Grid item key={data} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: "1px solid lightray" }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: '100%',
                }}
                image="https://source.unsplash.com/random?wallpapers"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="large" onClick={ () => onClick(data) }>확정</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MonthlyPick;
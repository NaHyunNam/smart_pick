import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

const Pickup = () => {
  const boxCount = 5 * 5;
  const [usedBox, setUsedBox] = useState([]);
  const [selectedBox, setSelectedBox] = useState(0);

  const fetch = () => {
    setUsedBox([4, 5, 10, 20]);
  }

  useEffect(() => {
    fetch();
  }, []);

  const selectBox = (index) => {
    if (usedBox.includes(index)) {
      alert("사용중인 박스는 선택이 불가능합니다.");
      return;
    }

    setSelectedBox(index);
  }

  const renderBox = () => {
    const element = []
    for (let index = 1; index <= boxCount; index++) {
      element.push(
        <Grid item key={index} xs={2} sm={4}>
          <Box onClick={() => selectBox(index)}>
            {
              usedBox.includes(index) ? 
                <Button
                  variant="outlined"
                  color={index == selectedBox ? "success" : "error"}
                  size="large"
                  sx={{
                    width: "100%",
                    height: "100%",
                    padding: "50px 0px",
                  }}
                >사용 중</Button>
                :
                <Button
                  variant="outlined"
                  color={index == selectedBox ? "success" : "primary"}
                  size="large"
                  sx={{
                    width: "100%",
                    height: "100%",
                    padding: "50px 0px",
                  }}
                >이용 가능</Button>
            }
          </Box>
        </Grid>
      );
    }

    return element;
  }

  const submit = () => {
    if (selectedBox == 0) {
      alert("사용할 박스를 선택해주세요.");
      return;
    }
    alert(selectedBox);
  }

  return (
    <Box height="100vh" display="flex" flexDirection="column" padding="30px">
      <Grid container spacing={2} columns={{ xs: 10, sm: 20 }}>
        {
          renderBox()
        }
      </Grid>
      <br />
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" size="large" onClick={submit}>
          선택
        </Button>
      </Box>
    </Box>
  );
} 

export default Pickup;
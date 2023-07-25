import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "mui-image";
import { Heading } from "./header";

const imageStyle = { marginLeft: "260px", marginTop: "20px" };

function ThankYou() {
  return (
    <div>
      <Heading />
      <Grid>
        <Grid
          item
          xs={14}
          sx={{
            height: "auto",
            width: "700px",
            margin: "20px auto",
            marginTop: "150px",
          }}
        >
          <Image
            src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg"
            height="200px"
            width="200px"
            style={imageStyle}
          />
          <Typography
            variant="h2"
            sx={{
              padding: "20px 150px",
              marginLeft: "25px",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            Thanks You
          </Typography>
          <br />
          <Typography
            variant="p"
            sx={{ marginLeft: "235px", fontWeight: "700" }}
          >
            Your Message has been sent
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThankYou;

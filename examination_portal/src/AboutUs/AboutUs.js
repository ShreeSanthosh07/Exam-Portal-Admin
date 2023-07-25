import React from "react";
import { Heading } from "../component/header";
import Footer from "../component/footer";
import { Grid, Typography } from "@mui/material";
import Image from "mui-image";

const imageStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

function AboutUs() {
  return (
    <div>
      <Heading />
      <Grid container>
        <Image src="technology.jpg" height="400px" style={imageStyle} />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "30%",
            left: "51%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontWeight: "700",
          }}
        >
          About Us
        </Typography>
        <Grid
          item
          xs={6}
          md={8}
          sx={{ marginLeft: "35px", lineHeight: "30px", marginTop: "70px" }}
        >
          <Typography
            variant="p"
            sx={{ fontWeight: "500", color: "#666666", fontSize: "18px" }}
          >
            Welcome to Kaivale Technologies! We are a team of passionate
            technologists dedicated to helping businesses and organizations
            leverage the power of technology to drive growth and achieve their
            goals.
          </Typography>
          <br />
          <br />
          <Typography
            variant="p"
            sx={{ fontWeight: "500", color: "#666666", fontSize: "18px" }}
          >
            Our company was founded in 2020 by Selvam & Gokul, who saw the
            potential for IT to transform industries and create new
            opportunities. Since then, we have grown into a full-service IT
            provider, offering a wide range of solutions and services.
          </Typography>
          <br />
          <br />
          <Typography
            variant="p"
            sx={{ fontWeight: "500", color: "#666666", fontSize: "18px" }}
          >
            At Kaivale Technologies, we are committed to delivering the highest
            quality services and solutions to our clients. We believe in
            building long-term relationships and working closely with our
            clients to understand their unique needs and challenges.
          </Typography>
          <br />
          <br />
          <Typography
            variant="p"
            sx={{ fontWeight: "500", color: "#666666", fontSize: "18px" }}
          >
            Our team of experts has a wealth of knowledge and experience in the
            IT industry, and we are always staying up-to-date with the latest
            technologies and trends. We pride ourselves on our ability to think
            creatively and find innovative solutions to our clients' problems.
          </Typography>
          <br />
          <br />
          <Typography
            variant="p"
            sx={{ fontWeight: "500", color: "#666666", fontSize: "18px" }}
          >
            Thank you for considering Kaivale Technologies and visitig our
            website for all of your IT needs. We look forward to the opportunity
            to work with you and help your business thrive.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={2}
          sx={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1127997676/photo/social-network-online-sharing-connection-concept.webp?b=1&s=170667a&w=0&k=20&c=66smyE__mHcoEv8pFMxoBcSn19FhDVY-_mvmiSnphcs=)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            marginTop: "100px",
            marginLeft: "auto",
            marginRight: "70px",
          }}
        ></Grid>
        <Grid
          xs={14}
          align="center"
          sx={{
            backgroundColor: "#f4f2f5",
            paddingTop: "90px",
            paddingBottom: "90px",
            marginTop: "80px",
          }}
        >
          <Typography variant="h3">Kaivale Solutions</Typography>
          <br />
          <Typography variant="p" sx={{ fontWeight: "700" }}>
            Cloud Service | BB Optimize Product | EmSigma
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontWeight: "700", lineHeight: "3" }}>
            Software Architecture | Software Development | Hardware Consulting |
            Software QA & Testing |
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontWeight: "700" }}>
            Project Management | Digital Marketing
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default AboutUs;

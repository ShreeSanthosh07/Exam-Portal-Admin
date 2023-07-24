import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5ebfa',
        height: '250px',
        marginTop: '120px'
      }}
    >
      <Container maxWidth="lg" align='center'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are Kaivale Technology, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
            669, 3rd Floor, 9th HSR Layout, Sector 7, Bangalore,Bangalore - 560102
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: Kaivale@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/kaivaletechnologies" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/kaivale_tech/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/company/kaivale-technologies/" color="inherit">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://kaivale.com/">
              Kaivale Technology
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
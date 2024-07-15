import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@mui/material'
import weildingLogo from '../src/assets/weildingLogo.png'
export default function Footer() {
  return (
    <>
      <Box component="footer" sx={{ backgroundColor: '#F8F8F8', color: '#000', py: 4 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="left">
              <img src={weildingLogo} alt="Company Logo" style={{ maxWidth: '150px' }} />
              <Typography variant="subtitle1">
                Mobile Welding Sydney offers dependable and efficient welding services. Our team of skilled
                professionals takes great pride in our excellent craftsmanship.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={4} textAlign="left">
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Useful Links</Typography>
                  <Link href="#" underline="none" textAlign="left">
                    Home
                  </Link>
                  <br />
                  <Link href="#" underline="none">
                    About Us
                  </Link>
                  <br />
                  <Link href="#" underline="none">
                    Book an Appointment
                  </Link>
                  <br />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Our Services</Typography>
                  <Link href="#" underline="none">
                    Metal Fabrication Sydney
                  </Link>
                  <br />
                  <Link href="#" underline="none">
                    Installation Service in Sydney
                  </Link>
                  <br />
                  <Link href="#" underline="none">
                    Maintenance
                  </Link>
                  <Link href="#" underline="none">
                    Mobile Welding
                  </Link>
                  <Link href="#" underline="none">
                    Pipe Fabrication
                  </Link>
                  <Link href="#" underline="none">
                    Pipe Welding
                  </Link>
                  <Link href="#" underline="none">
                    Production Welding
                  </Link>
                  <Link href="#" underline="none">
                    Steel Bollards Welding
                  </Link>
                  <Link href="#" underline="none">
                    Steel Fabrication
                  </Link>
                  <Link href="#" underline="none">
                    Heavy Welding Repair
                  </Link>
                  <Link href="#" underline="none">
                    Maintenance Repair
                  </Link>
                  <br />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">Repairs</Typography>
                  <Link href="#" underline="none">
                    Heavy Welding Repair
                  </Link>
                  <br />
                  <Link href="#" underline="none">
                    Maintenance Repair
                  </Link>
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="h6">Address: 16 LINCOLN STREET, MINTO NSW 2566</Typography>
            <Typography variant="h6">Email: letusweld4u@gmail.com</Typography>
            <Typography variant="h6">Phone: +61426395860 / 0287950323</Typography>
          </Box>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© Copyright Mobile Welding Sydney 2022 . All right reserved.</p>
            <p>Created by Dgtol Technologies</p>
          </div>
        </Container>
      </Box>
    </>
  )
}

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import weildingLogo from '../src/assets/weildingLogo.png';
import worker from '../src/assets/worker.jpg';
import { Container } from '@mui/material';
import Detailing from './Detailing';

const About = () => {
  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          backgroundImage: `url(${worker})`,
        //   marginTop:"8rem"
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={worker} alt="backgroundImage" />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h1" textAlign="left" marginTop="9rem" color="#FFD700" gutterBottom>
                About Us
              </Typography>
              <Typography variant="h5" color="inherit" textAlign="left" paragraph>
                Delivering exceptional welding services with precision and expertise. Our skilled professionals ensure
                top-notch craftsmanship and customer satisfaction in every project.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3" textAlign="left" alignItems="top" gutterBottom>
            We are highly skilled welders
            for your every solutions
            </Typography>
            <Typography variant="body1" textAlign="left" paragraph>
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Welding"
              style={{ width: '100%', height: '65vh', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
        <Detailing/>
      </Container>
    </>
  );
};

export default About;

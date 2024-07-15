import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';


const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: 'Adaptable Performance',
      description:
        'Our welding services adjust to your specific needs, enhancing efficiency and precision.',
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: 'Built to Last',
      description:
        'We provide durable welding solutions, ensuring long-lasting and robust results.',
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: 'Great User Experience',
      description:
        'Our experienced welders guarantee a seamless and professional service experience.',
    },
    {
      icon: <AutoFixHighRoundedIcon />,
      title: 'Innovative Functionality',
      description:
        'We utilize cutting-edge welding techniques to meet evolving industry standards.',
    },
    {
      icon: <SupportAgentRoundedIcon />,
      title: 'Reliable Support',
      description:
        'Count on our responsive customer support for all your welding service needs.',
    },
    {
      icon: <QueryStatsRoundedIcon />,
      title: 'Precision in Every Detail',
      description:
        'Our meticulous approach ensures high-quality welding with attention to every detail.',
    },
  ];
  

const Highlight = () => {
  return (
    <>
          <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            We are <span style={{color:"#FFD700"}}>Certified Welders</span>  in Sydney 
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  )
}

export default Highlight
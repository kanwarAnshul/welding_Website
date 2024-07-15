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
      title: 'Quality Commitment',
      description:
        'Mobile Welding Sydney guarantees the highest quality performance for all of your project needs, with each crew member ensuring the highest level of company standards.',
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: 'Versatile Expertise',
      description:
        'At Mobile Welding Sydney, our welding services encompass a wide range of materials and techniques. Our goal is to work hard so that our clients come away satisfied, no matter the size or scope of the job at hand.',
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: 'On-Demand Flexibility',
      description:
        'The Sydney Mobile Welding fleet is available for on call welding needs and is fully stocked with TIG welder with the ability to complete a variety of services.',
    },
  ];

const BottomHome = () => {
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
            <span style={{color:"#FFD700"}}>100%</span> Satisfaction Gurantee
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Guaranteed Satisfaction: Excellence in Every Weld, Every Time, Everywhere.    
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

export default BottomHome
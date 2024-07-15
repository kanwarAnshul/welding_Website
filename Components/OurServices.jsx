import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const tiers = [
  {
    title: 'Services',
    description: [
      'Metal Fabrication',
      'Mobile Welding',
      'Pipe Welding',
      'Steel Bollards Installation',
      'New Construction',
      'Pipe Fabrication',
      'Hard Facing',
      'Torch Cutting',
      'Monowills Handrailing and Balustrade Installation',
    ],
    buttonText: 'Learn More',
    buttonVariant: 'outlined',
  },
  {
    title: 'Repairs',
    description: [
      'Pressure Pipe Repairs',
      'Steam Pipe Repairs',
      'Maintenance Repairs',
      'Heavy Welding Repairs',
      'Production Welding',
      'Crack Repair',
      'Equipment Repair',
      'Fences and Gate Repair',
      'Trailer Frames and Axle Repairs',
      'Dumpster Repairs',
      'Truck and Fleet Repair',
    ],
    buttonText: 'Request Service',
    buttonVariant: 'contained',
  },
  {
    title: 'Types',
    description: [
      'Gas Metal Arc Welding (GMAW)',
      'Metal Inert Gas Welding (MIG)',
      'Flux-cored Arc Welding (FCAW or FCA)',
      'Heliarc, Tungsten Inert Gas Welding (TIG)',
      'Shielded Metal Arc Welding (SMAW)',
    ],
    buttonText: 'Discover More',
    buttonVariant: 'outlined',
  },
  {
    title: 'Materials',
    description: ['Carbon Steel', 'Aluminum', 'Cast Iron', 'Cast Aluminum', 'Stainless Steel', 'Pipe'],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
]

const OurServices = () => {
  return (
    <>
      <Container
        id="pricing"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
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
          <Typography component="h2" variant="h4" color="text.primary">
            Our Services
          </Typography>
          <Typography>
          Providing tailored welding solutions with a focus on precision, quality, and unmatched craftsmanship
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  p: 2,
                  border: tier.title === 'Professional' ? '1px solid' : undefined,
                  borderColor: tier.title === 'Professional' ? 'primary.main' : undefined,
                  background: tier.title === 'Professional' ? 'linear-gradient(#033363, #021F3B)' : undefined,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',  
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: tier.title === 'Professional' ? 'grey.100' : '',
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {tier.title === 'Professional' && (
                      <Chip
                        icon={<AutoAwesomeIcon />}
                        label={tier.subheader}
                        size="small"
                        sx={{
                          background: (theme) => (theme.palette.mode === 'light' ? '' : 'none'),
                          backgroundColor: 'primary.contrastText',
                          '& .MuiChip-label': {
                            color: 'primary.dark',
                          },
                          '& .MuiChip-icon': {
                            color: 'primary.dark',
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Divider
                    sx={{
                      my: 2,
                      opacity: 0.2,
                      borderColor: 'grey.500',
                    }}
                  />
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color: tier.title === 'Professional' ? 'primary.light' : 'primary.main',
                        }}
                      />
                      <Typography
                        component="text"
                        variant="subtitle2"
                        sx={{
                          color: tier.title === 'Professional' ? 'grey.200' : undefined,
                        }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default OurServices

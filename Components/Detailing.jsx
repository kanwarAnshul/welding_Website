import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded'
import detailing from '../src/assets/detailing.jpg'
import StriveDetailing from './StriveDetailing'

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Quality Welding Services at Mobile Welding Sydney',
    description:
      'Need a custom fabricated or welded item? We are always happy to fabricate from your prints or specifications. All welding projects are important to us no matter how large or small. We do quality welding and repairs and we stand behind our work.',
    imageLight: '/static/images/templates/templates-images/dash-light.png',
    imageDark: '/static/images/templates/templates-images/dash-dark.png',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Best & Reasonable Prices',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further.',
    imageLight: '/static/images/templates/templates-images/mobile-light.png',
    imageDark: '/static/images/templates/templates-images/mobile-dark.png',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Timely Delivery',
    description:
      'We offer local pick-up and delivery on smaller items. We can also provide orders of various steel products cut to size such as angle, round bar, channel, sheet and plate.',
    imageLight: '/static/images/templates/templates-images/devices-light.png',
    imageDark: '/static/images/templates/templates-images/devices-dark.png',
  },
]

const Detailing = () => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
 
  const handleItemClick = (index) => {
    setSelectedItemIndex(index)
  }

  const selectedFeature = items[selectedItemIndex]

  return (
    <>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography component="h2" variant="h4" color="text.primary" textAlign="left">
                Why Choose Us
              </Typography>
              <Typography variant="body1" textAlign="left" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
                Your Trusted Partner for Precision Welding and Quality Craftsmanship
              </Typography>
            </div>
            <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
              {items.map(({ title }, index) => (
                <Chip
                  key={index}
                  label={title}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    borderColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? selectedItemIndex === index
                          ? 'primary.light'
                          : ''
                        : selectedItemIndex === index
                        ? 'primary.light'
                        : '',
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? selectedItemIndex === index
                          ? 'none'
                          : ''
                        : selectedItemIndex === index
                        ? 'none'
                        : '',
                    backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                    '& .MuiChip-label': {
                      color: selectedItemIndex === index ? '#fff' : '',
                    },
                  }}
                />
              ))}
            </Grid>
            <Box
              component={Card}
              variant="outlined"
              sx={{
                display: { xs: 'auto', sm: 'none' },
                mt: 4,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${selectedFeature.imageLight})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 280,
                }}
              />
              <Box sx={{ px: 2, pb: 2 }}>
                <Typography color="text.primary" variant="body2" fontWeight="bold">
                  {selectedFeature.title}
                </Typography>
                <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                  {selectedFeature.description}
                </Typography>
                <Link
                  color="primary"
                  variant="body2"
                  fontWeight="bold"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    '& > svg': { transition: '0.2s' },
                    '&:hover > svg': { transform: 'translateX(2px)' },
                  }}
                >
                  <span>Learn more</span>
                  <ChevronRightRoundedIcon fontSize="small" sx={{ mt: '1px', ml: '2px' }} />
                </Link>
              </Box>
            </Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
                    backgroundColor: selectedItemIndex === index ? 'action.selected' : undefined,
                    borderColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? selectedItemIndex === index
                          ? 'primary.light'
                          : 'grey.200'
                        : selectedItemIndex === index
                        ? 'primary.dark'
                        : 'grey.800',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      textAlign: 'left',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { md: 'center' },
                      gap: 2.5,
                    }}
                  >
                   
                    <Box sx={{ textTransform: 'none' }}>
                      <Typography color="text.primary" variant="body2" fontWeight="bold">
                        {title}
                      </Typography>
                      <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                        {description}
                      </Typography>
                      <Link
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          '& > svg': { transition: '0.2s' },
                          '&:hover > svg': { transform: 'translateX(2px)' },
                        }}
                        onClick={(event) => {
                          event.stopPropagation()
                        }}
                      >
                        <span>Learn more</span>
                        <ChevronRightRoundedIcon fontSize="small" sx={{ mt: '1px', ml: '2px' }} />
                      </Link>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}>
            <Card
              variant="outlined"
              sx={{
                height: '87%',
                width: '100%',
                display: { xs: 'none', sm: 'flex' },
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                //   m: 'auto',
                  width: 350,
                  height: 350,
                  backgroundSize: 'cover',
                  backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
                }}
              />
              <img src={detailing} style={{ height: '100vh',width:"100vw" }} />
            </Card>
          </Grid>
        </Grid>
        <StriveDetailing/>
      </Container>
    </>
  )
}

export default Detailing

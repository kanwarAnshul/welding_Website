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
import { Image } from '@mui/icons-material'
import workerImage from '../src/assets/worker3.jpg'
import moneyValue from '../src/assets/money.png'
import award from '../src/assets/award.png'
import welder from '../src/assets/welder.png'
import srvices from '../src/assets/services.png'
const items = [
  {
    icon: welder,
    title: 'Certified Welders',
  },
  {
    icon: srvices,
    title: 'Fast And Quality Service',
  },
  {
    icon: moneyValue,
    title: 'Best Prices in Town',
  },
  {
    icon: award,
    title: 'Awarded Workshop',
  },
]

const AdditionalServices = () => {
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
              <Typography component="h2" variant="h4" color="text.primary">
                Why Choose Us
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
                Here you can provide a brief overview of the key features of the product. For example, you could list
                the number of features, the types of features, add-ons, or the benefits of the features.
              </Typography>
            </div>

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
                  backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 280,
                }}
              />
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
                  sx={{
                    p: 3,
                    height: 'fit-content',
                    width: '100%',
                    background: 'none',
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
                    <img src={icon} style={{height:"2.2rem"}}/>
                    <Box sx={{ textTransform: 'none' }}>
                      <Typography color="text.primary" variant="h6" fontWeight="bold">
                        {title}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {description}
                      </Typography>
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
                height: '100%',
                width: '100%',
                display: { xs: 'none', sm: 'flex' },
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  m: 'auto',
                  width: 420,
                  height: 450,
                  backgroundSize: 'contain',
                  backgroundImage: (theme) =>
                    theme.palette.mode === 'light'
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
                }}
              />
              <img src={workerImage} style={{ height: '100vh' }} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AdditionalServices

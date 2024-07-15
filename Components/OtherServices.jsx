import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/system'
import { Build, Construction, BuildCircle, Handyman } from '@mui/icons-material'
import Table from './ServiceTable'
import ServiceTable from './ServiceTable'

const services = [
    { icon: <Build />, title: 'Welding' },
    { icon: <Construction />, title: 'Fabrication' },
    { icon: <BuildCircle />, title: 'Repair' },
    { icon: <Handyman />, title: 'Custom Work' },
    { icon: <Build />, title: 'Pipe Welding' },
    { icon: <Construction />, title: 'Sheet Metal Fabrication' },
    { icon: <BuildCircle />, title: 'Structural Welding' },
    { icon: <Handyman />, title: 'MIG/TIG Welding' },
    { icon: <Build />, title: 'Aluminum Welding' },
    { icon: <Construction />, title: 'Mobile Welding Services' },
  ]


const logoStyle = {
  width: '64px',
  opacity: 0.3,
}

const OtherServices = () => {
  const theme = useTheme()

  return (
    <>
   <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h2" variant="h4" color="text.primary" gutterBottom>
      On Site Welding Services in Other Suburbs
      </Typography>
      {/* <Table/> */}
      <ServiceTable/>
    </Container>
    </>
  )
}

export default OtherServices

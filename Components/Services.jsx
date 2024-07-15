import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/system'
import Cards from './Cards'
import team from '../src/assets/team.png'
import ideas from '../src/assets/ideas.png'
import qualityWork from '../src/assets/qualityWorks.png'
import satisfaction from '../src/assets/satisfaction.png'
import moneyValue from '../src/assets/moneyValue.png'
import safety from '../src/assets/safety.png'

const userTestimonials = [
    {
        title:"Professional Team",
        content:"Led by a seasoned team, we uphold professionalism with expertise in innovative solutions. Our commitment ensures top-tier quality in every project we undertake",
        image:team
    },
    {
        title:"Great Ideas",
        content:"Driven by creativity and vision, we innovate solutions that redefine possibilities. Our team's fresh perspectives lead to exceptional outcomes in every endeavo",
        image:ideas
    },
    {
        title:"Quality Works",
        content:"With a focus on precision and excellence, we deliver high-quality results that surpass expectations. Our dedication ensures every project reflects our commitment to superior craftsmanship.",
        image:qualityWork
    },
    {
        title:"Project Satisfaction",
        content:"Client satisfaction is our priority. We strive to exceed project goals, delivering exceptional results that inspire confidence and trust in our services.",
        image:satisfaction
    },
    {
        title:"Value for Money",
        content:"Offering unparalleled value, we provide cost-effective solutions without compromising quality. Our services ensure maximum return on investment, tailored to meet your budget and needs.",
        image:moneyValue
    },
    {
        title:"Safety Practices",
        content:"Prioritizing safety above all, we adhere to rigorous standards to ensure a secure work environment. Our meticulous approach guarantees peace of mind throughout every project.",
        image:safety
    }
]


const logoStyle = {
  width: '64px',
  opacity: 0.3,
}

const Services = () => {
  const theme = useTheme()
  return (
    <>
      <Container
        id="testimonials"
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
            We Are <span style={{fontWeight:"bold"}}>Leading Industry</span> of <br/>Engineering . We Love What We Do
          </Typography>
         
        </Box>
        <Grid container spacing={2}>
          {userTestimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Cards title={testimonial.title} content={testimonial.content} image={testimonial.image}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Services

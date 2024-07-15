import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

// Dummy text data
const texts = [
  'Explore the world with us! Discover breathtaking landscapes and hidden gems.',
  'Discover new adventures! Every corner holds a story of adventure.',
  'Travel makes life richer! Experience cultures, connect hearts, make memories.',
  'Embrace the journey! Navigate challenges, discover yourself, grow through experiences.',
]

// Styled Typography component for the quote text
const QuoteText = styled(Typography)(({ theme }) => ({
  color: '#fff', // Set text color to black
  fontSize: '2rem', // Adjust font size as needed
  textAlign: 'center',
  fontWeight: 'bold',
  zIndex: 3,
}))

// Styled Box component for the background container
const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url('https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 650,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'black', // Text color
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay color with opacity
  },
}))

const UniqueQuotes = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Effect to cycle through quotes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <BackgroundContainer id="highlights">
      <QuoteText variant="h4" fontSize={30}>
        {texts[currentTextIndex]}
      </QuoteText>
    </BackgroundContainer>
  )
}

export default UniqueQuotes

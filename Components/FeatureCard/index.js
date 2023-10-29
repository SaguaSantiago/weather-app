import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

export default function FeatureCard({ value, unit, title, img }) {
  return (
    <Box component={Card} minWidth='100px' minHeight='130px'>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'caption', textAlign: 'center' }}
      />
      <CardMedia component='img' src={img} height='50' sx={{ width: 'auto', margin: '0 auto' }} />
      <CardContent>
        <Typography fontWeight='light' textAlign='center'>
          {Math.round(value) + ' '}
          {unit}
        </Typography>
      </CardContent>
    </Box>
  )
}

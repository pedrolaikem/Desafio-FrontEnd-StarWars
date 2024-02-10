import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Cards({ img, title, align}) {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      className='hover:-translate-y-12'
      
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src={img}
            loading="lazy"
            alt=""
            
            
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            textAlign={align}
            mt={{ xs: 12, sm: 18 }}
            
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
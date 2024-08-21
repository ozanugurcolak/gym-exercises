import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import Loader from './Loader';
import HorizontalScrollComp from './HorizontalScrollComp';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography variant='h3'  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollComp data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography variant='h3'  sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollComp data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;
import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button color='primary' type='submit'>
    Submit
  </Button>
);
export const Success = () => (
  <Button color='success' type='reset'>
    Reset
  </Button>
);

import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button color='primary' type='submit'>
    Submit
  </Button>
);
export const Success = () => (
  <Button color='success' type='button'>
    Button
  </Button>
);
export const Danger = () => (
  <Button color='danger' type='reset'>
    Reset
  </Button>
);

export default {
  title: 'Button',
  component: Button,
};

import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button color='primary' type='submit'>
    Save and continue
  </Button>
);
export const Success = () => (
  <Button color='success' type='button'>
    Save changes
  </Button>
);
export const Danger = () => (
  <Button color='danger' type='reset'>
    Cancel
  </Button>
);

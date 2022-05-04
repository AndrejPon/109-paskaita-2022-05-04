import React from 'react';
import Block from './components/Block/Block';
import Button from './components/Button/Button';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <>
      <div className='hero'>
        <Hero title='Success hero' subtitle='Success subtitle' />
      </div>
      <div className='block'>
        <Block color='danger'>All of this are evently spaced</Block>
      </div>

      <div className='button'>
        <Button color='primary'>Save and continue</Button>
      </div>
    </>
  );
}

export default App;

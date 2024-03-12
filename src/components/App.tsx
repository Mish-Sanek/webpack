import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import AppImage from '@/assets/app-image.svg';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1)

  // ToDo('sdfs');

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>Is Desktop Platform</div>
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>Is Mobile Platform</div>
  // }

  // if (__ENV__ === 'development') {
  //   console.log('====================================');
  //   console.log('dev');
  //   console.log('====================================');
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>Platform={__PLATFORM__}</h1>
      <aside>
        <img src={avatarPng} width={100} alt="" />
        <img src={avatarJpg} width={100} alt="" />
        <AppImage width={100} height='auto' color='red' />
      </aside>
      <nav>
        <Link to='/'>Home</Link>
        ||
        <Link to='/about'>About</Link>
        ||
        <Link to='/shop'>Shop</Link>
      </nav>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>inc</span>
      </button>
      <Outlet />
    </div>
  )
}

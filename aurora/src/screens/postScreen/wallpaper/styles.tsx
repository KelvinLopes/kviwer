import  {  createGlobalStyle  } from 'styled-components';
import WallpaperAuroraBoreal from '../../../assets/wallpapers/Aurora3.jpg';

export default createGlobalStyle`

body{
  background: url(${WallpaperAuroraBoreal}) no-repeat;
  background-size: cover;
  background-color: rgba(144, 206, 233, 0.7);
  background-position-x: 50%;
  background-position-y: 50%;
  background-position: center;

  width: 100vw;
  max-height: 100vh;
} 
`;

import  {  createGlobalStyle  } from 'styled-components';
import WallpaperAuroraBoreal from '../../../assets/wallpapers/aurora_places_background.jpeg';


export default createGlobalStyle`

body{
  background: url(${WallpaperAuroraBoreal}) no-repeat;
  background-color:rgba(51, 51, 51, 1);
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  background-position: center;

  min-height: 100vh;
} 
`;

import  {  createGlobalStyle  } from 'styled-components';
import WallpaperAuroraBoreal from '../../../assets/wallpapers/Wallpaper_Aurora_Oficial.png';

export default createGlobalStyle`

body{
  background: url(${WallpaperAuroraBoreal}) no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  background-position: center;

  min-height: 100vh;
} 
`;

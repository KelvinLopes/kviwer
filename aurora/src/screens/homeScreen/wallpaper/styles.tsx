import  {  createGlobalStyle  } from 'styled-components';
import WallpaperAuroraBoreal from '../../../assets/wallpapers/Aurora_Boreal_wallpaper.jpg';

export default createGlobalStyle`

body{
  background: url(${WallpaperAuroraBoreal}) no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  background-position: center;
} 
`;


 import  { Header } from  "../Header&Footer/Header";
 import { HomeStatic } from "./HomeStatic";
 import {HomeHeroComponent} from "./HomeHeroComponent";
 import { Footer } from "../Header&Footer/Footer";
 
 export const Home = () => {
    return (
     <div>
        <Header/>
        <HomeHeroComponent /> 
       <HomeStatic/>
       <Footer/>
     </div>
   );
 }
 

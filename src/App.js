import logo from './logo.svg';
import './App.css';
import ExploreHotels from './Components/ExploreHotels/ExploreHotels';
import ImageGallary from './Components/ImageGallary/ImageGallary';
import PropertyType from './Components/PropertyType/PropertyType';
import Navigaion from "./Components/Navigation/Navigation/Navigation";
import Banner from "./Components/Home/Banner/Banner";
import Carousel from "./Components/Carousel/Carousel";
import HowItWorksBanner from "./Components/Home/HowItWorksBanner/HowItWorksBanner";
import VideoBanner from "./Components/Home/VideoBanner/VideoBanner";
import Footer from "./Components/Shared/Footer/Footer";
import NewsLetter from "./Components/Home/NewsLetter/NewsLetter";



function App() {
  return (
    <>
      <Navigaion />
      <Banner />
      <ImageGallary />
      <ExploreHotels />
      <PropertyType />
      <HowItWorksBanner />
      <Carousel />
      <VideoBanner />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;

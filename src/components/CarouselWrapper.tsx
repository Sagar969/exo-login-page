import Carousel from './Carousel';
import ContactLinks from './ContactLinks';
import bgImage from '../assets/images/CarouselBG.png';
import logo from '../assets/icons/logo.svg';

const CarouselWrapper = () => {
  return (
    <div
      className="carousel-wrapper rounded-[20px] absolute top-[27px] left-5 w-[calc(50%-20px)] h-[calc(100%-52px)] xl:top-[52px] xl:left-10 xl:w-[calc(50%-40px)] xl:h-[calc(100%-104px)] text-white bg-cover bg-center overflow-hidden  tab:relative tab:top-0 tab:left-0 tab:w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={bgImage} alt="" className="h-full bg-contain absolute z-1" />

      <a href="#">
        <img src={logo} alt="Exo" className="absolute top-[27px] left-5" />
      </a>

      <Carousel />

      <ContactLinks />

    </div>
  );
};

export default CarouselWrapper;

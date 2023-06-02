import { useEffect, useRef, useState } from 'react';

interface ItemTextTypes {
  feature: string;
  description: string;
}

// Carousel Text
const carouselText: ItemTextTypes[] = [
  {
    feature: '100% uptime 😎',
    description: 'Zero Infrastructure Management',
  },
  {
    feature: 'Effortless Scalability 🚀',
    description: 'Seamlessly handle high traffic loads',
  },
  {
    feature: 'Uninterrupted Performance ⚡️',
    description: 'Deliver exceptional user experiences, always',
  },
];

const Carousel = () => {
  const [activeItem, setActiveItem] = useState<number>(1)

  return (
    <div className="carousel absolute top-[45%] left-5 w-full">
      <div className="carousel-items relative">
        {carouselText.map((text, i) => {
          return <CarouselItem text={text} key={i} item={i} setActiveItem={setActiveItem} />;
        })}
      </div>
      <div className="carousel-dots relative top-[200px] xl:top-[150px] flex gap-2">
        {carouselText.map((_, i) => {
          return <Dot isActive={i === activeItem} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;

interface CarouselItemPropsType {
  text: ItemTextTypes;
  item: number;
  setActiveItem: (prevState: number | ((prevState: number) => number)) => void;
}
const CarouselItem = ({ text, item, setActiveItem }: CarouselItemPropsType) => {
  const [pos, setPos] = useState(item);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    const el = divRef.current;
    const translate = (pos - 1) * 100;
    const opacity = pos === 1 ? '1' : '0';
    if(opacity === '1') setActiveItem(item)
    el.style.transform = `translateX(${translate}%)`;
    el.style.opacity = opacity;

    const timeOutId = setTimeout(() => {
      const newPos = pos === 0 ? 2 : pos - 1;
      setPos(newPos);
    }, 3000);

    return () => clearTimeout(timeOutId)
  }, [pos]);

  return (
    <div
      ref={divRef}
      className={` transition-all opacity-0 duration-500 flex flex-col absolute w-full`}
    >
      <span className="feature text-[38px] font-semibold ">{text.feature}</span>
      <span className="description text-[20px] text-grayish ">
        {text.description}
      </span>
    </div>
  );
};

interface DotPropsType {
  isActive: boolean;
}
const Dot = ({ isActive }: DotPropsType) => {
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(!divRef.current) return;
    divRef.current.style.width = isActive ? '20px' : '4px'
  }, [isActive])
  return (
    <div ref={divRef} className={`dot h-1 bg-grayish transition-all duration-300 rounded `}></div>
  );
};
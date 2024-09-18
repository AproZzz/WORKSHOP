import { Carousel } from "flowbite-react";

export function Carousel1() {
  return (
    <div className="h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-128">
      <Carousel
        slideInterval={5000}
        leftControl="left"
        rightControl="right"
      >
        <img src="/img/ds.jpg" alt="Image 1" />
        <img src="/img/ps.jpg" alt="Image 2" />
      </Carousel>
    </div>
  );
}

export default Carousel1;

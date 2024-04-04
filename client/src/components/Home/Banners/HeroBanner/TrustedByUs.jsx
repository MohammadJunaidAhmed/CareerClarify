import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrustedByUs = () => {
    const featured = [1,2,3];
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className="w-full flex justify-center">
        <div className="w-3/4 bg-neutral-50 p-1">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                itemClass="carousel-item-padding-40-px"
                customDot={<></>}
                >
                    {/* TODO: ADD REVIEWS HERE */}
                <div className="flex-1 m-1 h-full bg-slate-500 p-3">Item 1</div>
                <div className="flex-1 m-1 h-full bg-green-500 p-3">Item 2</div>
                <div className="flex-1 m-1 h-full bg-blue-500 p-3">Item 3</div>
                <div className="flex-1 m-1 h-full bg-yellow-500 p-3">Item 4</div>
                <div className="flex-1 m-1 h-full bg-slate-500 p-3">Item 5</div>
                <div className="flex-1 m-1 h-full bg-green-500 p-3">Item 6</div>
                <div className="flex-1 m-1 h-full bg-blue-500 p-3">Item 7</div>
            </Carousel>
        </div>
    </div>
  )
}

export default TrustedByUs
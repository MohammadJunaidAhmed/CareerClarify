import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewBanner = () => {
    const reviews = [
        {
            "name": "Junaid Ahmed",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Abraham Lincoln",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Nehru",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Junaid Ahmed",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Abraham Lincoln",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Abraham Lincoln",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Nehru",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Nehru",
            "review": "CareerClarify has helped me crack Google"
        },
        {
            "name": "Junaid Ahmed",
            "review": "CareerClarify has helped me crack Google"
        },
    ];
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
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
        <div className="w-3/4">
            <h1 className="text-slate-300 py-1 font-serif font-bold text-xl">Testimonials</h1>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                itemClass="carousel-item-padding-40-px"
                >
                    {/* TODO: ADD REVIEWS HERE */}
                {
                    reviews.map((review)=>{
                        return (
                        <div className="flex-1 m-1 h-64 bg-slate-500 p-3 rounded-xl" key={review.name}>
                            <ReviewCard review={review}/>
                        </div>
                        )
                    })
                }
            </Carousel>
        </div>
    </div>
  )
}

export default ReviewBanner
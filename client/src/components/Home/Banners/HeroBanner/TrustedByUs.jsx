import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import googleLogo from "../../../../assets/GoogleLogo.png"
import microsoftLogo from "../../../../assets/MicrosoftLogo.jpg"
import amazonLogo from "../../../../assets/AmazonLogo.png"
import appleLogo from "../../../../assets/AppleLogo.jpg"
import facebookLogo from "../../../../assets/FacebookLogo.png"

const TrustedByUs = () => {
    // const featured = [1,2,3];
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
    <div className="flex-1 flex justify-center">
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
                <div className="flex-1 m-1 h-14  p-3 border-r-2 border-black">
                  <img src={googleLogo} className="h-full w-full"/>
                </div>
                <div className="flex-1 m-1 h-14 p-3 border-r-2 border-black">
                  <img src={microsoftLogo} className="h-full w-full mix-blend-darken"/>
                </div>
                <div className="flex-1 m-1 h-14  p-3 border-r-2 border-black">
                  <img src={amazonLogo} className="h-full w-full mix-blend-multiply"/>
                </div>
                <div className="flex-1 m-1 h-14  p-1 flex justify-center items-center border-r-2 border-black">
                  <img src={appleLogo} className="h-full mix-blend-darken"/>
                </div>
                <div className="flex-1 m-1 h-14  p-3 flex justify-center items-center border-r-2 border-black">
                  <img src={facebookLogo} className="h-full mix-blend-darken"/>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default TrustedByUs
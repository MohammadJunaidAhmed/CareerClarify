import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = (props) => {
    const bgImg = props.image;
    const divStyle = {
        backgroundImage: `url(${bgImg})`,
    };
  return (
    <div className='w-full h-96 bg-gray-100 mt-24 flex justify-center'>
      <div className='w-full sm:w-4/5' style={divStyle}></div>
    </div>
  )
}

export default ExampleCarouselImage
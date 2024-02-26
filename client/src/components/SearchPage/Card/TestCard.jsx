const TestCard = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className=" relative h-96 w-96 bg-slate-500 flex justify-center">
            <div className="h-60 w-60 rounded-full bg-blue-500 flex mt-5"></div>
            <div className=" absolute h-32 w-32 bg-yellow-300 top-0 right-9 rounded-full">
                {/* TODO: ADD THE STAR RATING HERE */}
            </div>
        </div>
    </div>
  );
};

export default TestCard;

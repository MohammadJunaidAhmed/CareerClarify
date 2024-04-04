
const SortCard = () => {
  return (
    <div className="w-full h-16">
      <div className="w-full h-full pr-2 py-2 gap-4 flex">
        <div className="w-[150px] h-full bg-white rounded-md">
          <div className="h-full w-full flex justify-around items-center">
            <h1>Category</h1>
            <h1>^</h1>
          </div>
        </div>
        <div className="w-[150px] h-full bg-white rounded-md"></div>
        <div className="w-[150px] h-full bg-white rounded-md"></div>
        <div className="w-[150px] h-full bg-white rounded-md"></div>
      </div>
    </div>
  )
}

export default SortCard
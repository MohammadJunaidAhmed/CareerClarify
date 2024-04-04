
const ReviewCard = ({review}) => {
  return (
    <div className="w-full h-full bg-slate-500 p-1 flex flex-col rounded-xl">
        <div className="bg-blue-800 rounded-xl p-1">
            <h1 className=" font-serif text-xl">{review.name}</h1>
        </div>
        <div className="bg-white rounded-xl flex-1 p-1">
            <p className="text-black text-lg font-serif">{review.review}</p>
        </div>
    </div>
  )
}

export default ReviewCard
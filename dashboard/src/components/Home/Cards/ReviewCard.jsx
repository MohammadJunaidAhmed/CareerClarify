import info from "../../../assets/info.png"
import star from "../../../assets/star.png"

const ReviewCard = () => {
  return (
    <div className="w-[400px] h-[150px] bg-[#F5F5F5] rounded-xl px-7 py-3 flex flex-col">
        <div className="flex-1">
            <div className="w-full h-full flex gap-1 py-2 items-center text-lg">
                <img src={star} className="w-[35px]"/>
                <div>My Rating</div>
                <img src={info} className="w-[15px]"/>
            </div>
        </div>
        <div className="flex-1 flex justify-between py-2">
            <div className="flex h-full items-center">
                <div className="h-full flex gap-3 items-end">
                    <h1 className="text-4xl font-bold">4.5 <span className="text-5xl">/</span> <span className="text-3xl">5</span></h1>
                    <h1 className="text-lg pb-1 text-[#7A7A7A]">(123 Reviews)</h1>
                </div>
            </div>
            <div className="flex items-end">
                <div className="p-1 bg-[#E0E0E0] rounded-lg">See All </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
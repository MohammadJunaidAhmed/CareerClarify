import { useContext } from "react"
import BookingButton from "./BookingButton/BookingButton"
import mainContext from "../../../Contexts/MainContext/MainContext"

const BookingSection = () => {
  const {scW} = useContext(mainContext);
  return (
    <div>
        <div className="h-fit w-full"></div>
          <div className={`h-[30vh] w-full flex flex-col p-3 justify-start ${scW<600?'mb-10':''}`}>
            {/* <Link as={Link} to={"/requests/audio"}>
              <BookingButton txt={"Audio Messages"}/>
            </Link> */}
            <BookingButton txt={"Audio Messages"} type={"Audio"}/>
            <BookingButton txt={"Video Messages"} type={"Video"}/>
            <BookingButton txt={"Voice/Video call"} type={"OneOnOne"}/>
          </div>
          {/* <div className="h-[30vh] w-full"></div> */}
    </div>
  )
}

export default BookingSection
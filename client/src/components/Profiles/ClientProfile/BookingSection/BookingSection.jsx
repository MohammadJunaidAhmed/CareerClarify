import BookingButton from "./BookingButton/BookingButton"

const BookingSection = () => {
  return (
    <div className="flex-1">
        <div className="h-[10vh] w-full"></div>
          <div className="h-[30vh] w-full flex flex-col p-3 justify-between">
            <BookingButton/>
            <BookingButton/>
            <BookingButton/>
          </div>
          {/* <div className="h-[30vh] w-full"></div> */}
    </div>
  )
}

export default BookingSection
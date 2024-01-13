// import Card from "./Card/Card"
import CardsSection from "./CardsSection/CardsSection"
import FilterCard from "./FilterCard/FilterCard"

const SearchPage = () => {
  return (
    <div className="flex-1 flex bg-[#111827] pb-10">
      <CardsSection/>
      <FilterCard/>
        {/* <Card/> */}
    </div>
  )
}

export default SearchPage
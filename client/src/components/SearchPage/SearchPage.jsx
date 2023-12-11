// import Card from "./Card/Card"
import CardsSection from "./CardsSection/CardsSection"
import FilterCard from "./FilterCard/FilterCard"

const SearchPage = () => {
  return (
    <div className="flex-1 flex">
      <CardsSection/>
      <FilterCard/>
        {/* <Card/> */}
    </div>
  )
}

export default SearchPage
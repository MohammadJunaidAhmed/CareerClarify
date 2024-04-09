import SearchIcon from "../../../assets/searchIcon.png"

const SearchBar = () => {
  return (
    <div className=" h-full flex items-center w-[400px]">
      <div className="flex px-2 w-full h-2/3 items-center gap-2 bg-[#E0E0E0] py-3 rounded-lg cursor-pointer">
        <img src={SearchIcon} className="h-3/4"></img>
        <input type="text" placeholder="Search for products and more..." className="flex-1 focus:outline-none bg-[#E0E0E0]"/>
      </div>
    </div>
  )
}

export default SearchBar
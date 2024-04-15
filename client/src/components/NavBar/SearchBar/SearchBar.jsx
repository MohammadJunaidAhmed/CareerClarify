import loginContext from "../../Contexts/Login/LoginContext";
import { useContext, useState } from "react"

const SearchBar = ({isSearchBarVisible}) => {
    const {isClick, setIsClick} = useContext(loginContext);
    const searchQueries = [
      "Google",
      "Microsoft",
      "Amazon",
      "Accenture",
      "Netflix",
      "Apple",
      "Tesla",
      "JP Morgan",
      "Nvdia",
      "IBM",
      "Salesforce",
      "PayPal",
      "Adobe",
      "Micron",
      "Intuit",
      "NetApp",
      "Oracle",
      "Synopsys",
      "GoldmanSacs",
      "Barclays",
      "WellsFargo",
      "SAP",
      "VM Ware",
      "Adyen",
      "TCS",
      "Infosys",
      "Tech Mahindra",
      "PepsiCo",
      "Cisco",
      "UKG",
      "Congnizant",
      "Capgemini",
      "HPE",
      "HCL",
      "Wipro",
      "Intel",
      "Larsen & Turbo Infotech",
      "LTI",
      "Qualcomm",
      "Atlassian",
      "DE Shaw"
    ]
    const [searchString, setSearchString] = useState("");
  return (
    <div className={`w-full ${isSearchBarVisible ? '' : 'invisible'}`}>
        <div className={`flex flex-col justify-center items-center pb-1`}>
          <div className={`flex-1 w-full bg-white h-10 rounded-md flex ${isClick?' outline outline-orange-400':''}`}>
            <input type="search" list="queries"
             className=" flex-1 rounded-md px-5 cursor-pointer focus:outline-none" 
             placeholder={`Search for items`} 
             onClick={()=>setIsClick(true)} 
             onBlur={()=>setIsClick(false)}
             onChange={(e)=>{setSearchString(e.target.value); console.log(searchString)}}
             />
            <button className="w-10 bg-yellow-300 h-10 ml-auto rounded-e-md flex justify-center items-center hover:fill-orange-500">
                <svg className="scale-125 duration-150 ease-linear" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>

            {/* TODO: FETCH THE DATA FOR QUERIES */}
            {
              searchString !== "" &&
              <datalist id="queries" className={`cursor-pointer `}>
                {
                  searchQueries.map((query, index)=>{
                    return <option value={query} className="hover:bg-white cursor-pointer" key={index}></option>
                  })
                }
              </datalist>

            }
          </div>
        </div>
    </div>
  )
}

export default SearchBar
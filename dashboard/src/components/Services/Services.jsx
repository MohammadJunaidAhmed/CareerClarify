import { useContext, useEffect, useState } from "react"
import ServiceNote from "./ServiceNote/ServiceNote"
import mainContext from "../Contexts/MainContext";
import AddServiceNote from "./AddServiceNote/AddServiceNote";

const Services = () => {
  const [isAddingNewNote, setIsAddingNewNote] = useState(false);
  const {setActivePage} = useContext(mainContext);
  const [isEndDateVisible, setIsEndDateVisible] = useState(true);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [myservices, setMyServices] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('userId');

  useEffect(()=>{
    setActivePage('3');
  });

  useEffect(()=>{
    if(token){
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      fetch(`http://localhost:3000/api/v1/prof/getexp/${userId}`,{
        method: 'GET',
        headers
      })
      .then(response=>response.json())
      .then(json => {setMyServices(json)})
      .catch(error => console.error(error))
    }
  },[isAddingNewNote, isDeleteClicked])

  const handleAddService = async(event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const companyName = event.target.elements.companyName.value;
    const designation = event.target.elements.designation.value;
    const startDate = event.target.elements.startDate.value;
    const endDate = isEndDateVisible ? event.target.elements.endDate.value : "to-date";
    const price = event.target.elements.price.value;

    const token = localStorage.getItem('jwtToken');
    const userId = localStorage.getItem('userId');
    // Log the values to console
    console.log("Company Name:", companyName);
    console.log("Designation:", designation);
    console.log("Start Date:", startDate);
    if(endDate)
      console.log("End Date:", endDate);
    
      if(token){
        const response = await fetch(`http://localhost:3000/api/v1/prof/addexp/${userId}`,{
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ company:companyName, designation:designation, stillWorking:!isEndDateVisible, startDate:startDate, endDate: endDate, price: price }),
        })
      }
    setIsAddingNewNote(false);
    // console.log(response)
  };
  return (
    <div className="w-full h-full bg-white">
        <div className="p-4 h-fit w-full bg-slate-400 flex justify-center items-center flex-col gap-3">
          {
            !isAddingNewNote 
            ? 
            <div> 
              <button className="bg-blue-400 p-3 rounded-md font-serif" onClick={()=>setIsAddingNewNote(true)}>Create New Service</button>
            </div>
            :
            <form onSubmit={handleAddService}>
              {/* <AddServiceNote/> */}
              <div className='w-96 h-fit bg-yellow-400 flex flex-col gap-3 py-4 p-20'>
                <input type="text" name="companyName" placeholder="Company Name" className="p-[2px] rounded-md"/>
                <input type="text" name="designation" placeholder="Designation" className="p-[2px] rounded-md"/>
                <div>
                    <input type="checkbox" id="stillworking" onClick={()=>setIsEndDateVisible(!isEndDateVisible)}/>
                    <label htmlFor="stillworking" className="px-2">Still working?</label>
                </div>
                <div className="flex flex-col">
                    <label>Start Date:</label>
                    <input type="Date" name="startDate" placeholder="Start Date" className="p-[2px] rounded-md"/>
                    {
                        isEndDateVisible &&
                        <div className="flex flex-col">
                            <label>End Date:</label>
                            <input type="Date" name="endDate" placeholder="End Date" className="p-[2px] rounded-md"/>
                        </div>
                    }
                </div>
                <input type="number" name="price" placeholder="Enter price in INR" className="p-[2px] rounded-md"/>
              </div>
              <div className="flex justify-center px-4 py-2 gap-3">
                <button className="bg-green-400 p-2 rounded-md w-24" type="submit">Save</button>
                <button className="bg-red-400 p-2 rounded-md w-24" onClick={()=>setIsAddingNewNote(false)}>Cancel</button>
              </div>
            </form>
          }
        </div>
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {
            myservices.map((service)=>{
              // console.log(service)
              return (
                <div key={service._id}>
                  <ServiceNote 
                  company={service.company} 
                  designation = {service.designation}
                  stillWorking = {service.stillWorking}
                  startDate = {service.startDate}
                  endDate = {service.endDate}
                  expId = {service._id}
                  setIsAddingNewNote = {setIsAddingNewNote}
                  isDeleteClicked = {isDeleteClicked}
                  setIsDeleteClicked = {setIsDeleteClicked}
                  />
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Services
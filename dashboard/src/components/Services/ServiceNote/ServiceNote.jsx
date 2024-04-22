import { useState } from "react"
import binImg from "../../../assets/delete.png"


const ServiceNote = (props) => {
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const handleDelete = async() =>{
    // console.log(props.expId);
    const token = localStorage.getItem('jwtToken');
    const userId = localStorage.getItem('userId');
    if(token){
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };
      try{
        const response = await fetch(`http://localhost:3000/api/v1/exp/${props.expId}`,{
          method: 'DELETE',
          headers
        })
        props.setIsDeleteClicked(false);
        setIsDeleteClicked(false);
        console.log(response)
      }
      catch(e){
        console.log(e);
      }
    }
  }
  return (
    <div className='w-96 h-64 bg-yellow-400 flex flex-col'>
      {
        isDeleteClicked ?
        <div className="w-96 h-64 fixed flex justify-center items-center gap-3">
          <div className="w-96 h-64 bg-slate-400 opacity-45 fixed"></div>
          <button className="bg-blue-400 z-50 p-2 rounded-md hover:bg-red-500" onClick={handleDelete}>Sure?</button>
          <button className="bg-blue-400 z-50 p-2 rounded-md hover:bg-red-500" onClick={()=>{setIsDeleteClicked(false);props.setIsDeleteClicked(false)}}>Cancel</button>
        </div>
        :
        <div> </div>
      }


      <div className="font-serif text-2xl flex p-2">
        <h1 className="flex-1 fllex justify-end">{props.company}</h1>
        <button className="flex-1  flex justify-end" onClick={()=>{setIsDeleteClicked(true); props.setIsDeleteClicked(true)}}><img src={binImg} className="duration-300 hover:scale-105"/></button>
      </div>


      <div className="p-2">
        <h1>{props.designation}</h1>
        <h1>
        {
          props.stillWorking ? 'Still working':'Not Working'
        }
        </h1>
        <h1>{props.startDate}</h1>
        <h1>{props.endDate}</h1>
      </div>
    </div>
  )
}

export default ServiceNote
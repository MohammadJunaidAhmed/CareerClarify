import { useState } from "react"

const AddServiceNote = () => {
    const [isEndDateVisible, setIsEndDateVisible] = useState(true);
  return (
    <div className='w-96 h-64 bg-yellow-400 flex flex-col gap-3 py-4 p-20'>
        <input type="text" placeholder="Company Name" className="p-[2px] rounded-md"/>
        <input type="text" placeholder="Designation" className="p-[2px] rounded-md"/>
        <div>
            <input type="checkbox" id="stillworking" onClick={()=>setIsEndDateVisible(!isEndDateVisible)}/>
            <label htmlFor="stillworking" className="px-2">Still working?</label>
        </div>
        <div className="flex flex-col">
            <label>Start Date:</label>
            <input type="Date" placeholder="Start Date" className="p-[2px] rounded-md"/>
            {
                isEndDateVisible &&
                <div className="flex flex-col">
                    <label>End Date:</label>
                    <input type="Date" placeholder="End Date" className="p-[2px] rounded-md"/>
                </div>
            }
        </div>
    </div>
  )
}

export default AddServiceNote
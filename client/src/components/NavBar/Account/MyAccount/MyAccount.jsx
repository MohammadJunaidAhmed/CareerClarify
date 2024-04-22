// import emailImg from "../../../../assets/email.png"
import { useEffect } from "react"
import myPic from "../../../../assets/JunaidPic.jpg"
import Footer from "../../../Footer/Footer"
import NavBar from "../../NavBar"
import { useState } from "react"
const MyAccount = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const userId = localStorage.getItem('userId');
  const userJwtToken = localStorage.getItem('userJwtToken');
  
  useEffect(()=>{
    const headers = {
      'Authorization': `Bearer ${userJwtToken}`,
      'Content-Type': 'application/json',
    };
    fetch(`http://localhost:3000/api/v1/user/${userId}`,{
      method: 'GET',
      headers
    })
    .then(response => response.json())
    .then(json => {setUserName(json.name);setUserEmail(json.email);setUserDesc(json.desc);setUserAddress(json.zip);console.log(json)})
    .catch(error => console.log(error))
  },[])
  return (
    <div className="w-screen h-fit flex flex-col">
      <div className="sticky top-0">
        <NavBar isSearchBarVisible={false}/>
      </div>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-1/2 h-full">
          <div className="w-full h-full flex flex-col ">
            {/* HEADING */}
            <div className="p-4 w-full border-slate-500 border-b-[1px]">
              <h1 className="text-white text-5xl font-serif font-bold">Profile Settings</h1>
              <p className="w-3/4 mt-4 mr-4 pt-3 pb-1 text-lg text-slate-500 font-mono">You can set preferred display name, create your own profile URL and manage other personal settings</p>
            </div>
            {/* MAIN CONTENT HERE */}
            <div className="w-full  mt-1 pt-4 flex-1 flex  mb-2">
              {/* Image here */}
              <div className="p-2 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full">
                  <img className="w-full h-full rounded-full p-1" src={myPic}></img>
                </div>
                <button className="pt-1 text-slate-400">Change Image</button>
              </div>
              <div className="flex-1 flex flex-col p-3">
                <div className="flex flex-col pb-2">
                  <h1 className="text-xl font-bold p-2">Username</h1>
                  <div className="w-full bg-white h-16 rounded-xl border-black border-2 p-2 px-3 font-serif text-lg">
                    <input className="w-full h-full focus:outline-none" placeholder={userName}></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Email</h1>
                  <div className="w-full bg-white h-16 rounded-xl border-black border-2 p-2 px-3 font-serif text-lg flex">
                    {/* <img src={emailImg} className="pr-2 py-1"></img> */}
                    <input className="pl-2 w-full h-full focus:outline-none" placeholder={userEmail}></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Description</h1>
                  <textarea className="border-black border-2 rounded-xl p-2 font-serif" rows={3} placeholder={userDesc}/>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Address</h1>
                  <div className="w-full bg-white h-16 rounded-xl border-black border-2 p-2 px-3 font-serif text-lg flex">
                    <input className="pl-2 w-full h-full focus:outline-none" placeholder={userAddress}></input>
                  </div>
                </div>
                <div className="flex-1 flex justify-end items-end">
                  <button className="bg-blue-500 inline h-fit w-fit px-5 py-3 rounded-3xl">Save</button>
                  <button className="bg-red-500 inline h-fit w-fit px-5 py-3 rounded-3xl">Cancel</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MyAccount
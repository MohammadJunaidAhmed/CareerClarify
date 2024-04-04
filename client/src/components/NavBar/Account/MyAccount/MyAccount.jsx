import emailImg from "../../../../assets/email.png"
import myPic from "../../../../assets/JunaidPic.jpg"
import Footer from "../../../Footer/Footer"
import NavBar from "../../NavBar"
const MyAccount = () => {
  return (
    <div className="w-screen h-fit flex flex-col">
      <div className="">
        <NavBar isSearchBarVisible={false}/>
      </div>
      <div className="w-screen h-screen flex justify-center">
        <div className="w-1/2 h-full">
          <div className="w-full h-full flex flex-col bg-slate-200">
            {/* HEADING */}
            <div className="p-4 w-full border-slate-500 border-b-[1px]">
              <h1 className="text-gray-700 text-5xl font-serif font-bold">Profile Settings</h1>
              <p className="w-3/4 mt-4 mr-4 pt-3 pb-1 text-lg text-slate-500 font-mono">You can set preferred display name, create your own profile URL and manage other personal settings</p>
            </div>
            {/* MAIN CONTENT HERE */}
            <div className="w-full  mt-1 pt-4 flex-1 flex bg-slate-200 mb-2">
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
                    <input className="w-full h-full focus:outline-none" placeholder="Junaid Ahmed"></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Email</h1>
                  <div className="w-full bg-white h-16 rounded-xl border-black border-2 p-2 px-3 font-serif text-lg flex">
                    <img src={emailImg} className="pr-2 py-1"></img>
                    <input className="pl-2 w-full h-full focus:outline-none" placeholder="abc@gmail.com"></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Description</h1>
                  <textarea className="border-black border-2 rounded-xl p-2 font-serif" rows={3} placeholder="I am Junaid Ahmed"/>
                </div>
                <div className="flex flex-col py-2">
                  <h1 className="text-xl font-bold p-2">Address</h1>
                  <div className="w-full bg-white h-16 rounded-xl border-black border-2 p-2 px-3 font-serif text-lg flex">
                    <input className="pl-2 w-full h-full focus:outline-none" placeholder="XYZ, NYC"></input>
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
import { useContext, useState } from "react";
import mainContext from "../../Contexts/MainContext/MainContext";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

import circular from '../../../assets/circular.png'
import download from '../../../assets/download.png'


const AudioPage = () => {

    const {setIsAudioWindow} = useContext(mainContext);

    const [recBlob, setRecBlob] = useState(null);

    const recorderControls = useAudioRecorder();

    const handleDownload = () => {
        console.log("Download clicked!");
        const blob = recorderControls.recordingBlob;
        const fileExt = "webm";
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `audio.${fileExt}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      };

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex relative">
                <div className="flex-1 bg-gray-600 rounded-xl flex flex-col">
                    <div className="text-2xl text-white text-center h-fit w-full flex justify-center items-center ">
                        Audio Window
                    </div>
                    <div className=" flex-1 flex ">
                        
                        <div className="pt-2 flex-1 flex">
                            <div className="flex-[2_2_0%] bg-slate-400 flex">
                                <div className="mt-4 flex-1 flex flex-col">
                                    <div className="bg-slate-400 p-2 flex justify-center">
                                        <div className="flex items-center mr-4">
                                            {
                                                recorderControls.isRecording ? 
                                                ''
                                                :
                                                <h1 className="font-bold text-white">Record now!</h1>
                                            }
                                        </div>
                                        <div className={`${recorderControls.isRecording ? '' : 'hover:scale-110'}`}>
                                            <AudioRecorder 
                                                recorderControls={recorderControls}
                                                showVisualizer={true}
                                                onRecordingComplete={()=>setRecBlob(recorderControls.recordingBlob)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-[3_3_0%] bg-blue-300 flex flex-col">
                                        <div className={`flex justify-center flex-row ${recorderControls.recordingBlob ? 'p-2' : ''}`}>
                                            {recBlob && (
                                                <audio controls>
                                                    <source src={URL.createObjectURL(recorderControls.recordingBlob)} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio>
                                            )}
                                            <div className={`flex items-center ml-3 bg-slate-200 p-1 cursor-pointer rounded-md hover:scale-105 ${recBlob ? '' : 'hidden'}`}>
                                                <img src={circular} className="w-6 h-6 hover:-rotate-180 duration-500" onClick={()=>{setRecBlob(null)}}></img>
                                            </div>
                                            <div className={`flex items-center ml-3 bg-slate-200 p-1 cursor-pointer rounded-md hover:scale-105 ${recBlob ? '' : 'hidden'}`}>
                                                <img src={download} className="w-6 h-6" onClick={handleDownload}></img>
                                            </div>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
                                        </div>
                                        <div className="flex flex-1 justify-center ">
                                            <div className="flex justify-center items-center">
                                                <button className="border-black text-white p-2 px-4 w-fit bg-blue-800 rounded-full hover:scale-105 hover:bg-emerald-600">Send Audio</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex-[1_1_0%] flex bg-emerald-400">
                                <div className="flex-1 flex justify-center">
                                    <h1 className="text-2xl">Payment QR</h1>

                                </div>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
                <div className="w-7 flex justify-center mt-2 absolute right-0">
                    <div className="h-6 w-6 cursor-pointer hover:scale-105" onClick={()=>setIsAudioWindow(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" bg-slate-400 hover:bg-red-500 border border-black text-5xl rounded-full p-1 h-full w-full" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AudioPage
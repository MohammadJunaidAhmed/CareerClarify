import { useContext, useState, useEffect, useRef } from "react";
import mainContext from "../../Contexts/MainContext/MainContext";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { ReactMediaRecorder } from "react-media-recorder";

import circular from '../../../assets/circular.png'
import download from '../../../assets/download.png'
import { useReactMediaRecorder } from "react-media-recorder";


const VideoPage = () => {

    const mimeType = "audio/webm";

    const {setIsVideoWindow} = useContext(mainContext);

    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [videoChunks, setVideoChunks] = useState([]);
    const [recordedVideo, setRecordedVideo] = useState(null);

    const startRecording = async () => {
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: mimeType });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
      };

      const stopRecording = () => {
        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
          //creates a blob file from the audiochunks data
           const audioBlob = new Blob(audioChunks, { type: mimeType });
          //creates a playable URL from the blob file.
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           setAudioChunks([]);
        };
      };

      const getCameraPermission = async () => {
        setRecordedVideo(null);
        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
                };
                const audioConstraints = { audio: true };
                // create audio and video streams separately
                const audioStream = await navigator.mediaDevices.getUserMedia(
                    audioConstraints
                );
                const videoStream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );
                setPermission(true);
                //combine both audio and video streams
                const combinedStream = new MediaStream([
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);
                setStream(combinedStream);
                //set videostream to live feed player
                liveVideoFeed.current.srcObject = videoStream;
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    


  return (
    <div className="w-full h-full">
            <div className="w-full h-full flex relative">
                <div className="flex-1 bg-gray-600 rounded-xl flex flex-col">
                    <div className="text-2xl text-white text-center h-fit w-full flex justify-center items-center ">
                        Video Window
                    </div>
                    <div className=" flex-1 flex ">
                        
                        <div className="pt-2 flex-1 flex">
                            <div className="flex-[2_2_0%] bg-slate-400 flex">
                                <div className="mt-4 flex-1 flex flex-col">
                                    <div className="bg-slate-400 p-2 flex justify-center">
                                        <div className="flex items-center mr-4">  {/*TODO: REMOVE THIS!*/}
                                            {/* Recorder Here */}
                                            <div className="audio-controls">
                                                { recordingStatus === "inactive" ? (
                                                <button onClick={startRecording} type="button">
                                                    Start Recording
                                                </button>
                                                ) : null}
                                                {recordingStatus === "recording" ? (
                                                <button onClick={stopRecording} type="button">
                                                    Stop Recording
                                                </button>
                                                ) : null}
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="flex-[3_3_0%] bg-blue-300 flex flex-col">
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
                    <div className="h-6 w-6 cursor-pointer hover:scale-105" onClick={()=>setIsVideoWindow(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className=" bg-slate-400 hover:bg-red-500 border border-black text-5xl rounded-full p-1 h-full w-full" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default VideoPage
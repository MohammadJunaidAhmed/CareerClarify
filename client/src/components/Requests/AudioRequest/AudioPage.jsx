import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { useState } from "react";

const AudioPage = () => {
    const recorderControls = useAudioRecorder()
    const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  return (
    <div className='h-full w-full'>
        <div className='w-full h-64 flex justify-center items-center flex-col'>
            <div className='bg-slate-400 w-full h-64 flex flex-col items-center justify-center'>
                <div className='p-3'>
                    <AudioRecorder
                        recorderControls={recorderControls}
                        showVisualizer={true}
                        onRecordingComplete={(blob) => {
                            const url = URL.createObjectURL(blob);
                            const audio = new Audio(url);
                            audio.controls = true;
                            setRecordedAudioUrl(url);
                        }}
                    />
                </div>
                <div>
                    {
                        recorderControls.isRecording && 
                        <button onClick={recorderControls.stopRecording} className='bg-white p-2 rounded-xl'>Stop recording</button>
                    }
                </div>
            </div>
            <div className='flex-1'>
                {recordedAudioUrl && (
                    <>
                        <audio controls>
                            <source src={recordedAudioUrl} type='audio/mpeg' />
                            Your browser does not support the audio element.
                        </audio>
                    </>
                    )}
                <button className='bg-white p-3 w-64 rounded-full hover:bg-gray-100'>Send</button>
            </div>
        </div>
    </div>
  );
}

export default AudioPage
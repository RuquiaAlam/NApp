import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen pt-36 px-12 absolute aspect-video text-white bg-gradient-to-r from-black">
        <h1 className="font-bold text-6xl">{title}</h1>
        <p className="text-s py-6 w-1/4">{overview}</p>
        <div>
            <button className="cursor-pointer hover:bg-opacity-80 bg-gray-500 p-4 mx-2 px-12 text-lg text-white bg-opacity-50 rounded-lg">⏯️Play</button>
            <button className="cursor-pointer bg-gray-500 p-4 px-12 text-lg text-white bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
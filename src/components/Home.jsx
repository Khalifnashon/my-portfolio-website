import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container in the middle */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <p>Hi, my name is</p>
        <p>Khalif Nhashon</p>
        <h2>I'm a Full Stack Developer</h2>
        <p>I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently,I'm focused on
          building responsive full-stack web applications
        </p>
      </div>

    </div>
  )
}

export default Home
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p>// Check out some of my recent work</p>
        </div>

        {/* Project container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Specific card item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-style-div">
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

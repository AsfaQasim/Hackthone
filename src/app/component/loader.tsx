const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Outer Layer */}
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-[#2A254B] absolute"></div>
        {/* Middle Layer */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#4E4D93] absolute"></div>
        {/* Inner Layer */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#2A254B] absolute"></div>
      </div>
    );
  };
  
  export default Loader;
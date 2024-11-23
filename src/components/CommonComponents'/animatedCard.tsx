const AnimatedCard = ({ title, description, icon }:any) => {
    return (
      <div className="group relative flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-300 hover:shadow-5xl dark:bg-gray-800">
       <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
        <span className="text-white text-3xl">{icon}</span>
      </div>
        <h3 className="text-2xl font-serif font-extrabold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm  text-gray-600 text-center mt-2 dark:text-gray-300">
          {description}
        </p>
        </div>
  
    );
  };

  export default AnimatedCard
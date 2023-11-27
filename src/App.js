import { Sidebar } from './compoent/Sidebar';
import { MaintInfo } from './Pages/MaintInfo';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

function App() {
  const [showToggle, setShowToggle] = useState(true);

  const handleToggle = () => {
    setShowToggle(!showToggle);
  };


  return (
    <div className='flex flow-row w-full relative'>
      <div>
        <FiAlignJustify
          className={`block sm:hidden text-8xl text-indigo-700 absolute left-10 top-5 bottom-5 z-50`}
          onClick={handleToggle}/>
      </div>
      <div className={`sm:basis-1/4 w-full ${showToggle ? 'hidden' : 'block'} sm:block sm:relative  absolute z-40 top-0 bg-gray-100`}>
        <Sidebar />
      </div>
      <div className='basis-full '>
        <MaintInfo />
      </div>
    </div>

  );
}

export default App;

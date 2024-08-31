
// import React from "react";
// import MentoringApp from "./components/mentoring/MentoringApp";

// const App = () => {
//   return (
//     <div>
//       <MentoringApp />
      
      
//     </div>
//   );
// };

// export default App;


import { Link, Route, Routes } from 'react-router-dom';
//import Show from './components/Show';
//import Home from './components/Home';
//import Services from './components/Services';
import MentoringApp from './components/mentoring/MentoringApp';
import Dashboard from './components/mentoring/Dashboard';
import About from './components/mentoring/About';



///////// to install react router dom
const App = () => {

  return(
    <div className=' pt-[3%] flex  flex-col gap-5 '>

      <nav className='flex justify-center gap-5 font-bold '>

        <Link className='bg-blue-200 px-3 rounded-lg' to="/"> HomePage </Link>
        <Link className='bg-blue-200 px-3 rounded-lg' to="/dashboard">DashBoard</Link>
        <Link className='bg-blue-200 px-3 rounded-lg' to="/about">About Us</Link>

      </nav>
      
      <Routes>
        <Route path="/" element={<MentoringApp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        


      </Routes>
      


    </div>
  );




}


export default App

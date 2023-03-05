
import './App.css';
import card from "../src/projects";
import image from './img.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css' 


function App() {

  AOS.init({
    offset: 200,
duration: 600,
easing: 'ease-out',
delay: 200,
});


  return (
    <div className="App bg-gradient-to-b from-slate-900 via-indigo-700 to-fuchsia-800 h-screen over p-8 flex justify-evenly items-center">
      <div className="sidebar">
        <div data-aos="zoom-in" className="text-white h-fit rounded-2xl shadow-[0px_0px_5px_rgba(225,225,225,0.65)] p-6 w-auto bg-gray-300 bg-opacity-10 ">
         
          <div className='flex justify-center items-center'>
            <img  src={image} alt="" className='object-contain h-40 rounded-2xl' />
          </div>
          <h1  className='Name  m-6 text-4xl whitespace-nowrap text-center rounded-xl font-bold '>
            <span className='font-mono text-4xl drop-shadow-[0px_0px_2px_rgba(225,225,225,0.65)]'>J</span>hone Doe
          </h1>
          
        </div>

      </div>
      <hr className='bg-gray-300 h-full w-1 m-10' />
      <div className="history items-start flex-row justify-center ">
        {/* <h1 className='text-white font-semibold text-4xl v items-baseline whitespace'>Today's Expense</h1>
        <div className="total bg-gray-500 h-48 w-96 rounded-xl bg-opacity-30 m-4 ">

        </div> */}
        <h1 data-aos="zoom-out" className='text-white font-semibold text-6xl v items-baseline whitespace'>Payment <span> History</span></h1>
        <hr className='bg-gray-500 w-auto align-baseline m-10' />
        <div className='h-96 overflow-scroll'>
          {card()}
        </div>
      </div>
    </div>
  );
}

export default App;


import SheetDB from 'sheetdb-js';
import Projects from '../src/data/data.json';
import { useState,useEffect } from 'react';
import './projects.css'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css' 


function Card() {
    // Replace the following variables with your own values
    
  
    // Define state variables
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch data from SheetDB API on component mount
    useEffect(() => {
        AOS.init({
            offset: 200,
      duration: 600,
      easing: 'ease-out',
      delay: 200,
    });
        // axios.get('https://sheetdb.io/api/v1/7vuri0t6whjph')
        
      axios.get('https://sheetdb.io/api/v1/boquxjkqizfuy')
        .then(response => {
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    // Map fetched data into list items
    const items = data.map(item => (
      <li data-aos="fade-up">
        <p className='m-3'> Date : {item.date}</p>
        <p className='m-3'>Breakfast: Rs. {item.brkfst}</p>
        <h2 className='text-white m-3'>Lunch : Rs. {item.lunch}</h2>
        <p className='m-3'>Dinner: Rs. {item.dinner}</p>
      </li>
    ));
  
    // Render component
    return (
      <div>
        {loading && <p>Loading data...</p>}
        {error && <p>An error occurred: {error.message}</p>}
        {!loading && !error && (
          <ul   className=' text-white'>
            {items}
          </ul>
        )}
      </div>
    );
  }
  export default Card;



// function carder(){
//     fetch('https://sheetdb.io/api/v1/7vuri0t6whjph')
//   .then((response) => response.json())
//   .then((data) => console.log(data ));


//   axios.get("https://sheetdb.io/api/v1/7vuri0t6whjph")
//   .then(response => {
//     // Map fetched data into new array
//     const mapped_data = response.data.map(item => ({
//       date: item.date,
//       brkfst: item.brkfst,
//       lunch: item.lunch
//     }));
//     console.log("Helloooooooo")
//     console.log(mapped_data );
//   })
//   .catch(error => console.error(error));


//     return(
//         <div data-aos="fade-left" id='id' className='px-1 z-10 flex-row justify-around gap-6 h-auto overflow-auto p-8  '>
//             {
//                 Projects.map( project=>{
//                     return(
//                         <div id='card'  className='font-semibold max-w-xl my-5 p-2 border-2 dark:border-none  bg-opacity-90 bg-white text-center shadow-xl  dark:bg-white dark:bg-opacity-10 dark:shadow-[2px_2px_10px_rgba(225,225,225,0.25)] ' key={project.id}>
                            
//                             <p className='dark:text-white my-2'>{project.content}</p>
                            
                            
                        
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }



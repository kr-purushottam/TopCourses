import './App.css';
import { Navbar } from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import { filterData,apiUrl } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {

  const[courses, setCourses] = useState(null); 
  const[loading, setLoading] = useState(true);
  
  async function fetchData() {
    setLoading(true);
    try{
       let res = await fetch(apiUrl);
      let output = await res.json();
      //save the daya to the variable
      //console.log(output);
      setCourses(output.data);
    }
    catch(error) {
      toast.error("something went wrong");
    }
    setLoading(false);
  }

  useEffect( ()=> {
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Filter filterData = {filterData}></Filter>
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
      }
      {/* <Cards courses = {courses}></Cards> */}
      </div>
    </div>
  );
}

export default App;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Categories = () => {
  const { strCategory } = useParams();
  console.log(strCategory);

  // Initialize data as an object
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
        console.log(response.data.meals);
        setData(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchdata();
  }, []); 
console.log('data',data);
  return (
    
    <>
    <h1 style={{display:'flex',justifyContent:'center',textTransform:'capitalize',marginTop:'60px'}} className='font2'>  {strCategory}</h1>
      <div className='alignrow'style={{marginTop:'30px'}}>
      {data.map((meal) => (
        <div className='box3'style={{marginTop:"60px"}}>

          <img style={{height:'260px',width:"320px",borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}}   src={meal.strMealThumb} alt={meal.strMeal} />
          <h5><i style={{display:'flex',justifyContent:'center',padding:'5px'}}> <b> {meal.strMeal}</b> </i></h5>  
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}} >
               <Link to={`/ingredient/${meal.idMeal}`}><button className='btn2' ><i>ViewDetails</i></button></Link> 
          </div>
        </div>
      
        
      
      ))}
     
      </div>
      
    </>
  );
};

export default Categories;



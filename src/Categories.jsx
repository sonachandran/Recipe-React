
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <div className='alignrow'style={{marginTop:'100px'}}>
      {data.map((meal) => (
        <div className='box3'style={{marginTop:"80px"}}>

          <img style={{height:'260px',width:"320px",borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}}   src={meal.strMealThumb} alt={meal.strMeal} />
          <h3 style={{display:'flex',justifyContent:'center'}}>{meal.strMeal}</h3>
          <button style={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>ViewDetails</button>
         
        </div>
      
        
      
      ))}
     
      </div>
      
    </>
  );
};

export default Categories;



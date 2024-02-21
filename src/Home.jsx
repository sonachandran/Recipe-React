

import img from './img.jpg'
import './Food.css';
import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const[categories,setCategories]=useState([])

  useEffect(()=>{
      let foodcategory=async()=>{
          let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
          console.log(response);
          setCategories(response.data.categories)

      }
      foodcategory()
      
  },[])
console.log("categories:",categories );

  return (
    <>

       <div className='img1 text'>
 
          <b> Find recipies for every occasion <br />
            Cooking never was easier</b> <br/>

            <Link to='/allitems'> <Button style={{marginTop:'150px' ,alignItems:'center',marginLeft:'-500px'}} className='' variant="">Search Your Recipe</Button>{' '}</Link>
       </div>
     
           
         
  

    
    <h1 style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>CATEGORIES</h1>
    <div className='alignrow'>

    {categories.map((item)=>(
//1
    < div className='box'>
    <Link to={`/category/${item.strCategory}`} ><img src={item.strCategoryThumb} alt="" className='mt-5' /></Link> 
     <h3>{item. strCategory}</h3>
   
     </div>
      ))}
      </div>
</>
    
   

  
  )
}

export default Home
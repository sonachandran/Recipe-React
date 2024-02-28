import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
const{strArea}=useParams()
const [data,setData]=useState([])
useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`)
        setData(response.data.meals)
    }
    fetchdata()
},[])
console.log('datas',data);

  return (
    
<div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'30px',marginTop:'60px'}}>

    {data.map((item)=>(
        <>
        <div className='box3'>
        <img style={{height:'260px',width:"320px",borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} className=' img-fluid ' src={item.strMealThumb} alt="" />
        <h5><i style={{display:'flex',justifyContent:'center',padding:'15px'}}> <b> {item.strMeal}</b> </i></h5>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}} >
    <Link to={`/ingredient/${item.idMeal}`}> <button style={{height:'35px',width:'100px',borderRadius:'15px'}} ><i>ViewDetails</i></button></Link>
        </div>
        </div>
        </>
    ))}
       
    </div>
  )
}

export default Details
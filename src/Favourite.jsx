
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Removefavourite } from './redux/Reducer';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Favourite = () => {
  

    const favouriteItems = useSelector(state => state.favourites.favouriteItems);
    const dispatch = useDispatch();
    console.log("fav",favouriteItems);

//remove item
    const handleRemove = (idMeal) => {
        dispatch(Removefavourite(idMeal));
       
    };

   
    return (


<div>
{favouriteItems.length === 0 ? (
    <div style={{ marginTop: '200px', textAlign: 'center', color: 'gray' }}>
        <h3>No Favourites</h3>
    </div>
) : (

  <div>
  {favouriteItems.map((item) => (
                  <div className=' container-fluid'>
                  
                      <div className='mt-5'  style={{display:'flex',justifyContent:'center'}}>
                         <img width={'300px'} height={'300px'} style={{ borderRadius: '15px' }} src={item.strMealThumb} alt="" className=' img-fluid ' /> 
                         </div>
                      
                      <div className='font2' style={{fontSize:'30px',display:'flex',justifyContent:'center'}} >  {item.strCategory}            
                        <button className='fav2' style={{float:' center'}} onClick={() => handleRemove(item.idMeal)}>{favouriteItems?<FaRegHeart />  : <FaHeart />}</button>
                        <div>
                        <Link to={`/ingredient/${item.idMeal}`} className='items'> <button className='view'>ViewDetails</button></Link>
                        </div>
                      </div>
                      
                    </div>
                   
                ))}
      </div>
 )}
</div>


)
}

export default Favourite;




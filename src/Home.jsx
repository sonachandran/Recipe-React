


import './Food.css';
import Button from 'react-bootstrap/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    let foodcategory = async () => {
      let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      console.log(response);
      setCategories(response.data.categories)

    }
    foodcategory()

  }, [])
  console.log("categories:", categories);

  return (


    <>
      <div className='img1 img-fluid ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <b className='text'> ARE YOU  HUNGRY ?</b>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to='/allitems'> <button className='btn1 mt-4'>Search Your Recipe</button></Link>
        </div>

      </div>


      <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: '"Protest Riot", sans-serif' }}>CATEGORIES</h2>
      <div className='alignrow'>

        {categories.map((item) => (

   <Link to={`/category/${item.strCategory}`}  className='items'> 
        < div className='box mt-5'>
             <img src={item.strCategoryThumb} alt="" className='' />
              <h4 style={{marginTop:'15px'}}><i><b >{item.strCategory}</b></i></h4>

          </div>
     </Link>
        ))}
      </div>

    </>
  )
}

export default Home
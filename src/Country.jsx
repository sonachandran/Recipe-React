import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Country = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      setData(response.data.meals)
    }
    fetchdata()
  }, [])
  console.log('data', data);
  return (
    <>
     <h1 style={{display:'flex',justifyContent:'center'}} className='font2 mt-5 '>Countries</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap',marginTop:'50px' }}>
        {data.map((items) => (
      <Link to={`/detail/${items.strArea}`}className='country' > 
      <div className='box4 '>
        <div >{items.strArea}</div>
      </div>
       </Link>
        

         
        ))}
      </div>

    </>
  )
}

export default Country
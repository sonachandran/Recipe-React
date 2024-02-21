
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './Food.css'

const Allitems = () => {
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);

  const fetchdata = (event) => {
    setTitle(event.target.value);
  };

  const submitbutton = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
      console.log(response.data.meals);
      setData(response.data.meals); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    submitbutton();
  }, []);

  return (
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px',gap: '8px'}}>
        <input
          type="text"
          onChange={fetchdata}
          placeholder="search here"
          name="inputdata"
          style={{ height: '40px', width: '400px', borderRadius: '10px', borderColor:'rgb(108, 87, 60)' }}
        />
        <button
          onClick={submitbutton}
          style={{ height: '45px', width: '100px', borderRadius: '10px', borderColor:'rgb(108, 87, 60)', color:'white',backgroundColor:'rgb(108, 87, 60)'}}
        >
          Search
        </button>
      </div>

      <div>
        <div className='alignrow' style={{marginTop:'50px'}}>
       
        {data.map((item) => (
         
          < div className='box2'>
            <img  style={{height:'260px',width:"320px",borderTopRightRadius:'20px',borderTopLeftRadius:'20px'}} src={item.strMealThumb} alt={item.strMeal} />
            <h3 style={{display:"flex",justifyContent:'center'}}>{item.strMeal}</h3>
            
            </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Allitems;

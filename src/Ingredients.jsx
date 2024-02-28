
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { CiHeart } from "react-icons/ci";
// import { addtofavourite, Removefavourite } from './redux/Reducer';
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";


// const Ingredients = () => {
//     const { Mealid } = useParams();
//     const [data, setData] = useState('');
//     const favourites = useSelector((state) => state.favourites.favouriteItems);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`);
//                 setData(response.data.meals[0]);
//                 console.log(data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchData();
//     }, [Mealid]);

//     const dispatch = useDispatch();

//     const isFavorite = favourites.find((item) => item.id === data.idMeal);
//     console.log("favourite", isFavorite);  

//     const handleAddToFavorites = () => {
//         dispatch(addtofavourite(data));

//     }
//     const handleRemoveFavourites = () => {
//         dispatch(Removefavourite(data.idMeal));

//     }


//     return (
    //     <>
    //         <b><h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }} className='font2'>{data.strMeal}</h1></b>
    //         <div className='row' style={{ margin: '60px', gap: '50px' }}>
    //             <div className='col'>
    //                 <img width={'700px'} height={'600px'} style={{ borderRadius: '15px' }}className=' img-fluid '  src={data.strMealThumb} alt="" />
    //                 <div>
    //                     <button className='fav' onClick={!isFavorite ? handleAddToFavorites  :handleRemoveFavourites} >{!isFavorite ? <FaHeart color="red"/> : <FaRegHeart />}</button>
    //                 </div>
    //             </div>

    //             <div className='col' style={{ marginLeft: '100px', marginTop: '50px' }}>
    //                 <h1 className='font2' style={{ fontSize: '30px' }}>Ingredients</h1>
    //                 <ul className='list-group ' style={{ fontSize: '20px' }}>

    //                     <i>{data.strIngredient1}<br />
    //                         {data.strIngredient2}<br />
    //                         {data.strIngredient3}<br />
    //                         {data.strIngredient4}<br />
    //                         {data.strIngredient5}<br />
    //                         {data.strIngredient6}<br />
    //                         {data.strIngredient7}<br />
    //                         {data.strIngredient8}<br />
    //                         {data.strIngredient9}<br />
    //                         {data.strIngredient10}<br />
    //                         {data.strIngredient11}<br />
    //                         {data.strIngredient13}<br /></i>

                                     
    //                    </ul>
                    
    //             </div>

    //             <div>
    //                 <h2 className='font2'>How to Make!</h2>
    //                 <i style={{ fontSize: '18px' }}>{data.strInstructions}</i>
    //             </div>
    //         </div>
    // </>
//     )
// }

// export default Ingredients;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtofavourite, Removefavourite } from './redux/Reducer';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Ingredients = () => {
    const { Mealid } = useParams();
    const [data, setData] = useState('');
    const favourites = useSelector((state) => state.favourites.favouriteItems);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`);
                setData(response.data.meals[0]);
                const favorite = favourites.find((item) => item.id === data.idMeal);
                setIsFavorite(!!favorite);//it set favorite in to true if favorite is not false
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [Mealid, data.idMeal, favourites]);

    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(Removefavourite(data.idMeal));
        } else {
            dispatch(addtofavourite(data));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        

        <>
        <b><h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }} className='font2'>{data.strMeal}</h1></b>
        <div className='row' style={{ margin: '60px', gap: '50px' }}>
            <div className='col'>
                <img width={'700px'} height={'600px'} style={{ borderRadius: '15px' }}className=' img-fluid '  src={data.strMealThumb} alt="" />
                <div>
           <button className='fav' onClick={handleToggleFavorite}>
                {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
                </button>
       
                </div>
            </div>
            <div className='col' style={{ marginLeft: '100px', marginTop: '50px' }}>
                <h1 className='font2' style={{ fontSize: '30px' }}>Ingredients</h1>
                <ul className='list-group ' style={{ fontSize: '20px' }}>

                    <i>{data.strIngredient1}<br />
                        {data.strIngredient2}<br />
                        {data.strIngredient3}<br />
                        {data.strIngredient4}<br />
                        {data.strIngredient5}<br />
                        {data.strIngredient6}<br />
                        {data.strIngredient7}<br />
                        {data.strIngredient8}<br />
                        {data.strIngredient9}<br />
                        {data.strIngredient10}<br />
                        {data.strIngredient11}<br />
                        {data.strIngredient13}<br /></i>

                                 
                   </ul>
                
            </div>

            <div>
                <h2 className='font2'>How to Make!</h2>
                <i style={{ fontSize: '18px' }}>{data.strInstructions}</i>
            </div>
        </div>
</>       
    );
};
export default Ingredients;

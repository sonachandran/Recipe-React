import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appnav from './Appnav';
import Home from './Home';
import Categories from './Categories';
import Allitems from './Allitems'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Country from './Country';
import Details from './Details';
import Ingredients from './Ingredients';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Favourite from './Favourite';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
  <BrowserRouter>
  
    <Routes>
      <Route>
       
        <Route path='/'element={<Appnav/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/category/:strCategory' element={<Categories/>}/>
        <Route path='/ingredient/:Mealid' element={<Ingredients/>}/>
        <Route path='/allitems'element={<Allitems/>}/>
        <Route path='/favourite'element={<Favourite/>}/>            
        <Route path='/country'element={<Country/>}/>  
        <Route path='/detail/:strArea' element={<Details/>}/>  
        
        </Route>

      </Route>
    </Routes>
    


    </BrowserRouter> 

    </Provider>

  
  </React.StrictMode>
);





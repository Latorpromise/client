import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import SearchField from './components/searchfield';
import MyCarousel from './components/MyCarousel';
import Categories from './components/Categories';
import HotelCard from './components/HotelCard';
import AllCategories from './components/all-categories';


function App() {
  return (
    <>
      <Header />
      <div className='nav-foot' >
      </div>
      <SearchField />
      <MyCarousel />
      <Categories />
      <HotelCard />
      <AllCategories />
    </>
  );
}

export default App;
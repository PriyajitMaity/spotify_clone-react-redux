import './songList.scss';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharts } from "../../Slices/chartSlice";
import { Link } from 'react-router-dom';



const SongList = () => {
    
  const dispatch =useDispatch();
  const {loading, featuredCharts } =useSelector(state =>state.charts)

  const [showAll, setShowAll] =useState(false);

  const handleShow =() =>{
    setShowAll(!showAll);
  }
  useEffect(() =>{
    
    dispatch(fetchCharts());
    // console.log('items',featuredCharts.categories);
  }, [dispatch]);

  if(loading){
    return <h1>Loading...</h1>
}

  return (
    <main className='browse-main'>
      
      <div className="browse-nav">
          <h1>Browse</h1>
          <button className="browse-btn" onClick={handleShow}>{showAll ? 'Show Less' : 'Show All'}</button>
        </div>
        <div className="browse-grid">
        {
         featuredCharts?.categories?.items?.slice(0, showAll ? featuredCharts?.categories?.items?.length : 4).map((ele) =>{
            return(
              <div className='browse-ele' key={ele.id}>
                <img src={ele.icons[0]?.url} alt={ele.name} />
                <h3>{ele.name}</h3>
              </div>
            )
          })
        }
        </div>
        
    </main>
  );
};

export default SongList;






    

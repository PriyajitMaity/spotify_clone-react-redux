import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArtists } from "../../Slices/allArtistSlice";
import './AllArtist.scss';
import { Link } from "react-router-dom";


const AllArtist = () => {
    const {loading, allArtists } =useSelector(state =>state.allArtist)
    const dispatch =useDispatch();

    useEffect(() =>{
       dispatch(fetchAllArtists());
      //  console.log(allArtists);
    }, [dispatch])

    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <main>
        <h1 className="top-artist">Top Artists</h1>
        
        <div className="artists-list" >
          { allArtists ? (
                allArtists.artists?.map((ele) =>{
                  return (
                    <div className="artists-ele" key={ele.id}>
                      <Link to={`/artists-details/${ele.id}`}  style={{ textDecoration: 'none' }} >
                      <img src={ele?.images[0]?.url} alt={ele.name} />
                      <div className="play-btn">
                        <span><i className="fa-solid fa-play"></i></span>
                      </div>
                      <div className="artists-detail">  
                        <h3>{ele.name}</h3>
                        <h4>{ele.type}</h4>
                      </div>
                      </Link>
                    </div>
                  )
                })
          ) : (
              <h1>Loading...</h1>
          )
           
          }
        </div>
        
    </main>
  );
};

export default AllArtist;

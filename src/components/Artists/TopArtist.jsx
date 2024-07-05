import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsList } from "../../Slices/artistsSice";
import './TopArtist.scss'
import { Link } from "react-router-dom";

const TopArtist = () => {
    const { loading } =useSelector(state =>state.artists);
    const { artistsList } =useSelector(state =>state.artists);
    const dispatch =useDispatch();

    useEffect(() =>{
        dispatch(fetchArtistsList());
        console.log(artistsList);
    }, [dispatch])

    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div className="artist-list">
        <div className="artist-nav">
            <h1>Artists</h1>
            <Link to={'/artists'} className="show-all"> Show all</Link>
        </div>
        <div className="artist-grid">
            {
                artistsList?.artists?.map((ele) =>{
                    return(
                        <div className="artist-ele" key={ele.id}>
                            <img src={ele.images[0]?.url} alt={ele.name} />
                            <div className="artist-detail">
                            <h3>{ele.name}</h3>
                            <p>{ele.type}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  </div>
)};

export default TopArtist;

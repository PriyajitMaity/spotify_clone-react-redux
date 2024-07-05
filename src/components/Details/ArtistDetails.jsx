import React,{useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsDetail, fetchArtistsTracks } from "../../Slices/artistsDetail";
import { useParams } from "react-router-dom";
import './details.scss'

const ArtistDetails = () => {
    const {id} =useParams();
    const dispatch  =useDispatch();
    const {error,  selectedArtist, artistTrack} =useSelector(state =>state.artist);


    useEffect(() =>{   
        dispatch(fetchArtistsDetail(id)); 
        dispatch(fetchArtistsTracks(id)); 
    console.log(artistTrack);

    },[dispatch, id])
    
    if (error) {
        return <p>Error: {error}</p>; 
      }

      const formatDuration = (durationMs) => {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <section>
            <div className="artist-heading">
            {
                selectedArtist ? (
                    <div className="artist-details">
                       <div className="artist-verify">
                            <i className="fa-solid fa-certificate fa-2x"></i>
                            <h4>Verified Artist</h4>
                       </div>
                       <h1>{selectedArtist?.name}</h1>
                       <h3> <span>{selectedArtist?.followers?.total}, </span>{" "}monthly listners</h3>
                    </div>
                ) : (
                    <p>Loading....</p>
                )
            }
            </div>
            <div className="artist-track">
                <div className="track-top-items">
                    <span><i className="fa-solid fa-play"></i></span>
                    <button>Follow</button>
                </div>
                <p className="popular">Popular</p>
                <div className="track-songs-list">
                {
                   artistTrack?.tracks?.map((ele, index) =>{
                    return(
                        <div className="songs-track-details" key={index}>
                            <ul>
                                <li className="track-index">
                                    <span>{index +1}</span>
                                </li>
                                <li className="track-image">       
                                <span>
                                    <img src={ele?.album?.images[2]?.url} alt="" />
                                </span>
                                </li>
                                <li className="track-name">
                                    {ele?.name}
                                </li>
                                <li className="track-time">
                                    {formatDuration(ele?.duration_ms)}
                                </li>
                                <li className="track-album">{ele?.album?.name}</li>
                            </ul>

                        </div>
                    )
                   })
                }
                </div>
            </div>
        </section>
  );
};

export default ArtistDetails;

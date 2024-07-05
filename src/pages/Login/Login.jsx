import React from "react";
import './Login.scss';


 const authEndPoint ="https://accounts.spotify.com/authorize";
 const clientId ='d856f2dede1e4afa805aecf1ef8a63a7';
 const redirectUri ="http://localhost:5173/";
 const responseType ='token';
 

const Login = () => {
  return (
    <main>
      
        <div className="login">
             <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="spotify-logo" />
             <a href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}>LOGIN WITH SPOTIFY</a>
        </div>
        
    </main>
  );
};

export default Login;

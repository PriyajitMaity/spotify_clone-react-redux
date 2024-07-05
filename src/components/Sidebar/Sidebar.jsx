import './Sidebar.scss';

const Sidebar = () => {
  return(
    <menu>
        <div className="menubar-top">
            <ul>
                <li>                   
                    <i className="fa-solid fa-house fa-2x"></i>                    
                   <span>Home</span>
                </li>
                <li>                   
                    <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                    <span>Search</span>
                </li>
            </ul>                      
        </div>  
        <div className="menubar-bottum">
            <ul>
                <li>
                  <i className="fa-solid fa-bars fa-2x"></i>
                  <span className="library">Your Library</span>
                </li>
                <li>
                    <div className="menubar-scroll">
                        <div className="create-playlist">
                            <h4>Create your first playlist</h4>
                            <p>Its easy, we wll help you</p>
                            <button>Create Playlist</button>
                        </div>
                        <div className="create-playlist">
                            <h4>Lets find some podcasts to follow</h4>
                            <p>We wll keey you updated on new episodes</p>
                            <button>Browse podcasts</button>
                        </div>
                    </div>
                </li>
            </ul> 
            <div className="language-btn">
                <button>
                <i className="fa-solid fa-globe"></i>
                <p>English</p></button>
            </div>             
        </div>                           
    </menu>
  )
};

export default Sidebar;

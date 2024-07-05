import './Home.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Home from '../Home/Home';
import AllArtist from "../../components/all-artist/AllArtist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistDetails from "../../components/Details/ArtistDetails";


const Home = () => {


  return (
  <Router >
    <div className="app">   
      <Sidebar />
        <div className="main-section">
            <Header />
              <Routes>
                  {/* <Route path="/" element ={<Home />} />   */}
                <Route path="/" element={<AllArtist />} />
                <Route path="/artists-details/:id" element={<ArtistDetails />} />
              </Routes>
            <Footer />
        </div>
    </div>
  </Router>
)};

export default Home;



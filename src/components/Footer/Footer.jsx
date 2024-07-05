import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="columns">
          <p>company</p> 
          <ul className='col-links'>
            <li><a href="">about</a></li>
            <li><a href="">jobs</a></li>
            <li><a href="">for the record</a></li>
          </ul>
        </div>
        <div className="columns">
          <p>communities</p>
          <ul className='col-links'>
            <li><a href="">for artists</a></li>
            <li><a href="">developers</a></li>
            <li><a href="">advertising</a></li>
            <li><a href="">investors</a></li>
            <li><a href="">vendors</a></li>
          </ul>
        </div>
        <div className="columns">
          <p>useful links</p>
          <ul className='col-links'>
            <li><a href="">support</a></li>
            <li><a href="">free mobile app</a></li>
          </ul>
        </div>
        <div className="columns">
          <p>spotify plans</p>
          <ul className='col-links'>
            <li><a href="">premium individual</a></li>
            <li><a href="">premium duo</a></li>
            <li><a href="">premium family</a></li>
            <li><a href="">premium student</a></li>
            <li><a href="">spotify free</a></li>
          </ul>
        </div>
        <div className="media">
        </div>
          <div className="columns">
            <div className="social-media">
              <i className="fa-brands fa-facebook fa-2x"></i>
              <i className="fa-brands fa-twitter fa-2x"></i>
              <i className="fa-brands fa-instagram fa-2x"></i>
          </div>
      </div>
      </div>
      <hr />
      <div className="footer-last-section">
        <div className="footer-action-section">
          <ul>
            <li>Legal</li>
            <li>Safety & Privacy </li>
            <li>Cookies</li>
            <li>Privacy Policy</li>
            <li>About Ads</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="footer-copyright-section">
          <span>© 2024 spotify AB
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { useDispatch } from 'react-redux';
import { fetchUserData, userActions } from './store/user';

function App() {
  const [token, setToken] = useState(() => {
    const storedToken = window.localStorage.getItem('token');
    return storedToken || '';
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];

      if (token) {
        window.localStorage.setItem('token', token);
        setToken(token);
        dispatch(fetchUserData());
        dispatch(userActions.setUser({ token }));
      }
    }
    console.log('token is :',token);

    document.title = 'Spotify';
  }, [token, dispatch]);

  return (
    <>
      {token ? <Home /> : <Login />}
    </>
  );
}

export default App;

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <>
    //   <Home />
    //   <Movies />
    // </>
    <>
      {/* header */}
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};

export default App;

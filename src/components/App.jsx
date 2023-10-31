import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      {/* header */}
      <nav>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;

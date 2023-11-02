import Layout from 'Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

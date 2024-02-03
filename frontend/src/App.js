import './App.css';
import Header from './components/Header';
import BlogsListPage from './pages/BlogsListPage';
import BlogPage from './pages/BlogPage'
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="dark">
        <Header />
        <Routes>
          <Route path='/' exact Component={BlogsListPage} />
          <Route path='/blog/:id' Component={BlogPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

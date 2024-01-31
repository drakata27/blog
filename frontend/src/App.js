import './App.css';
import Header from './components/Header';
import BlogsListPage from './pages/BlogsListPage';

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
        <BlogsListPage />
      </div>
    </Router>
  );
}

export default App;

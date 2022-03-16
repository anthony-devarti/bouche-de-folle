//import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React restaurant</h1>
      <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem',}}>
        <Link to="/">Home</Link>| {" "}
        <Link to="/src/routes/menu">Menu</Link>| {" "}
        <Link to="/src/routes/visit">Visit Us</Link>| {" "}
        <Link to="/src/routes/contact">Contact Us</Link>| {" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

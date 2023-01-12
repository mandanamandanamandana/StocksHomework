import { Outlet } from 'react-router-dom'; //outlet is a parent element to render child elements
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;

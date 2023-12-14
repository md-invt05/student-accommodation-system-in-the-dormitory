import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './style.css';
import Form from './Form';
import Menu from './Menu';
import Find from './Find';
function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Form/>}></Route>
        <Route path = "/Menu" element = {<Menu/>}></Route>
        <Route path="/Find" element = {<Find/>}></Route>
      </Routes>
    </>
  );
}

export default App;

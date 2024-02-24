import './App.css';
import Books from './Components/Books';
import Form from './Components/Form';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState();

  return (
    <div>
      <Navbar setInputValue={setInputValue} inputValue={inputValue} />
      <Routes>
        <Route path='/' element={<Books setInputValue={setInputValue} inputValue={inputValue} />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

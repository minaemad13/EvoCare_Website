import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Book from './components/Book';
function App() {
  return (
    <div className="App">
      <Book/>
    </div>
  );
}

export default App;

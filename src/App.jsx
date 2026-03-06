import React from 'react';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>Administrador de Empleados</h1>
      </header>

      <main>
        <CountryList />
      </main>

      <footer>
        <p>CRUD de Empleados © 2026</p>
      </footer>

    </div>
  );
}

export default App;
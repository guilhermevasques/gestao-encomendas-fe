import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CriarEncomenda from './components/CriarEncomenda';
import ConsultarEncomenda from './components/ConsultarEncomenda';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Gestão de Encomendas</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/criar-encomenda">Criar Encomenda</Link>
                        </li>
                        <li>
                            <Link to="/consultar-encomenda">Consultar Encomenda</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/criar-encomenda" element={<CriarEncomenda />} />
                    <Route path="/consultar-encomenda" element={<ConsultarEncomenda />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
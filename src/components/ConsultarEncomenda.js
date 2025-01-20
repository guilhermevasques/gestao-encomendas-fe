import React, { useState } from 'react';
import axios from 'axios';

const ConsultarEncomenda = () => {
    const [encomendaId, setEncomendaId] = useState('');
    const [encomenda, setEncomenda] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5290/api/encomendas/${encomendaId}`);
            setEncomenda(response.data);
            setMessage('');
        } catch (error) {
            setMessage(error.response?.data || 'Erro ao consultar encomenda');
            setEncomenda(null);
        }
    };

    return (
        <div>
            <h2>Consultar Encomenda</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Encomenda ID:</label>
                    <input 
                        type="number" 
                        value={encomendaId} 
                        onChange={(e) => setEncomendaId(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Consultar</button>
            </form>
            {message && <p>{message}</p>}
            {encomenda && (
                <div>
                    <h3>Detalhes da Encomenda</h3>
                    <p>ID: {encomenda.id}</p>
                    <p>Produto ID: {encomenda.produtoId}</p>
                    <p>Quantidade: {encomenda.quantidade}</p>
                    <p>Data de Criação: {new Date(encomenda.dataCriacao).toLocaleString()}</p>
                    <p>Expiração: {new Date(encomenda.dataExpiracao).toLocaleString()}</p>
                    <p>Concluída: {encomenda.concluida ? 'Sim' : 'Não'}</p>
                </div>
            )}
        </div>
    );
};

export default ConsultarEncomenda;

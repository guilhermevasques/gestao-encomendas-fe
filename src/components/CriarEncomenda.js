import React, { useState } from 'react';
import axios from 'axios';

const CriarEncomenda = () => {
    const [produtoId, setProdutoId] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5290/api/encomendas', {
                produtoId: parseInt(produtoId),
                quantidade: parseInt(quantidade)
            });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response?.data || 'Erro ao criar encomenda');
        }
    };

    return (
        <div>
            <h2>Criar Encomenda</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Produto ID:</label>
                    <input 
                        type="number" 
                        value={produtoId} 
                        onChange={(e) => setProdutoId(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input 
                        type="number" 
                        value={quantidade} 
                        onChange={(e) => setQuantidade(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Submeter</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CriarEncomenda;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgentsList() {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR');
        setAgents(response.data.data);
      } catch (error) {
        setError('Desculpe, não foi possível carregar os agentes no momento.');
      }
    }

    fetchAgents();
  }, []);

  return (
    <section id="agents-container" className="agents-container">
      {error ? (
        <p>{error}</p>
      ) : (
        agents.map(agent => (
          <div key={agent.uuid} className="agent-card">
            <img
              className="agent-image"
              src={agent.fullPortrait ? agent.fullPortrait : 'placeholder.jpg'}
              alt={`${agent.displayName} Image`}
            />
            <div className="agent-content">
              <h2 className="agent-name">{agent.displayName}</h2>
              <p className="agent-role">{agent.role ? agent.role.displayName : 'Sem Classe'}</p>
              <p className="agent-description">{agent.description}</p>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default AgentsList;
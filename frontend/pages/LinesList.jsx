export function LinesList({ linhas, selecionarLinha, selecionarParada }) {
  return (
    <div>
      {linhas.map((linha) => (
        <div key={linha.id} style={cardStyle}>
          <div onClick={() => selecionarLinha(linha)} style={{ cursor: 'pointer' }}>
            <strong>Linha {linha.id}</strong>
            <p>{linha.nome}</p>
          </div>

          <div style={stopsContainerStyle}>
            {linha.stops?.map((parada, index) => (
              <div key={index} style={stopItemStyle}>
                <span>{parada.nome || parada.name}</span>
                
                {/* APLICAÇÃO DO ONCLICK QUE VOCÊ MOSTROU */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que o clique "suba" para a linha
                    selecionarParada(parada); 
                  }}
                  style={buttonStyle}
                >
                  📍 Localizar
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Estilos rápidos para teste
const cardStyle = { border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' };
const stopsContainerStyle = { marginTop: '10px', paddingLeft: '10px', borderTop: '1px solid #eee' };
const stopItemStyle = { display: 'flex', justifyContent: 'space-between', padding: '5px 0' };
const buttonStyle = { cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' };
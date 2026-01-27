import React from 'react';


export function LinesList({ linhas, selecionarLinha }) {
  console.log(linhas);
  if (!linhas || linhas.length === 0) {
    return <div className="p-4 text-gray-500">Carregando linhas...</div>;
  }

  return (
    <div>
      {linhas.map((linha) => (
        <div key={linha.id}>
          <strong>Linha {linha.id}</strong>
          <p>{linha.nome}</p>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

export default function LinesList({ linhas, selecionarLinha }) {
  if (!linhas || linhas.length === 0) {
    return <div className="p-4 text-gray-500">Carregando linhas...</div>;
  }

  return (
    <div className="divide-y divide-gray-100">
      {linhas.map((linha) => (
        <div 
          key={linha.id} 
          className="p-4 hover:bg-blue-50 cursor-pointer transition-all"
          onClick={() => selecionarLinha(linha.id)}
        >
          <div className="flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: linha.cor || '#1756df' }} 
            />
            <span className="font-bold text-gray-900 text-sm">Linha {linha.codigo}</span>
          </div>
          <p className="text-xs text-gray-500 truncate">{linha.nome}</p>
        </div>
      ))}
    </div>
  );
}
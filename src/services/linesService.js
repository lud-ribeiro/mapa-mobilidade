export async function getLines() {
  const res = await fetch("/data.json"); // agora vai funcionar
  if (!res.ok) throw new Error("Erro ao buscar linhas");
  return res.json();
}


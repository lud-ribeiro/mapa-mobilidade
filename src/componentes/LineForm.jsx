import { useState } from "react";

export default function LineForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ id: Date.now(), name, lat: -15.7942, lng: -47.8822 });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nova linha"
        style={{ padding: "5px", marginRight: "5px" }}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

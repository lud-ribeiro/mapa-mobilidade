export default function LineItem({ line, onClick }) {
  return (
    <li
      style={{ cursor: "pointer", padding: "5px", borderBottom: "1px solid #ccc" }}
      onClick={() => onClick(line)}
    >
      {line.name}
    </li>
  );
}

import "./InputElement.css";

export function InputElement({ label, type }) {
  return (
    <label>
      <div className="label">{label}</div>
      <input className="input" type={type} />
    </label>
  );
}

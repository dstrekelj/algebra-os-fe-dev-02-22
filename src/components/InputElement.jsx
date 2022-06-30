import "./InputElement.css";

export function InputElement({ label, type, onChange, name, value }) {
  return (
    <label>
      <div className="label">{label}</div>
      <input className="input"
        type={type}
        onChange={onChange}
        name={name}
        value={value} />
    </label>
  );
}

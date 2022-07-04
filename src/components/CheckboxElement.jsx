import "./CheckboxElement.css";

export function CheckboxElement(props) {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.label}
    </label>
  )
}
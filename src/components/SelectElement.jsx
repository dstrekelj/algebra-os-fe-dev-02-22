import "./SelectElement.css";

export function SelectElement(props) {
  const optionElements = props.options.map((option, index) => (
    <option key={index} value={option.value}>{option.label}</option>
  ));

  return (
    <label>
       <div className="label">{props.label}</div>
      <select
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {optionElements}
      </select>
    </label>
  );
}
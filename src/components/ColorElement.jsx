import "./ColorElement.css";

import { useEffect, useRef, useState } from "react";

export function ColorElement(props) {
  const [ value, setValue ] = useState(props.value);
  const inputRef = useRef();

  useEffect(() => {
    if (value !== props.value) setValue(props.value);
  }, [value, props.value]);

  const openColorPicker = () => {
    inputRef.current.click();
  }

  const updateValue = (event) => {
    setValue(event.target.value);
    props.onChange(event);
  }

  return (
    <div>
      <span>{props.label}</span>
      <span>{value}</span>
      <button type="button" onClick={openColorPicker}>
        Color picker
      </button>
      <input
        ref={inputRef}
        name={props.name}
        type="color"
        onChange={updateValue}
        value={props.value}
      />
    </div>
  );
}

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
    <label className="color-element">
      <div className="color-element__label">
        {props.label}
      </div>
      <div
        className="color-element__input"
        onClick={openColorPicker}
      >
        <span className="color-element__input-value">
          {value}
        </span>
        <div
          className="color-element__input-color"
          style={{ backgroundColor: value }}
        />
        <input
          ref={inputRef}
          name={props.name}
          type="color"
          onChange={updateValue}
          value={props.value}
        />
      </div>
    </label>
  );
}

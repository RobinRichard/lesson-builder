import React, { useState } from "react";

export const Settings = ({ selected, onSave }) => {
  const [text, setText] = useState(selected.value);
  const [styles, setStyles] = useState(selected.styles);
  const onChange = (e) => {
    const _style = { ...styles };
    _style[e.target.name] = e.target.value;
    setStyles({ ...styles, ..._style });
  };

  return (
    <div className={"mt-3 col-md-12"}>
      <label>Text</label>
      <input
        className={"form-control"}
        type={"text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {styles &&
        Object.keys(styles).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              className={"form-control"}
              type={"text"}
              value={styles[key]}
              name={key}
              onChange={onChange}
            />
          </div>
        ))}

      <input
        className={"btn btn-sm btn-outline-dark mt-3"}
        type={"button"}
        value={"save"}
        onClick={() => {
          onSave(selected.id, text, styles);
        }}
      />
    </div>
  );
};

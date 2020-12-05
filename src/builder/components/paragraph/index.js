import React from "react";
import { Style } from "../../styles";
import { formatStyles } from "../../utils.js";

const Paragraph = ({ item, onSelect }) => {
  return (
    <p style={formatStyles(item.styles)}>
      {item.value}
      {onSelect && (
        <input
          className={"btn btn-sm btn-primary ml-4"}
          type={"button"}
          value={"\u270E"}
          onClick={() => {
            onSelect(item);
          }}
        />
      )}
    </p>
  );
};
Paragraph.displayName = "Paragraph component";

export const paragrphStyles = [
  new Style("color", "#009688", ""),
  new Style("fontSize", "16px"),
];

export default Paragraph;

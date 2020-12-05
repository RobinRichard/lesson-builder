import React from "react";
import { formatStyles } from "../../utils.js";

const Heading = ({ item, onSelect }) => {
  return (
    <h1 style={formatStyles(item.styles)}>
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
    </h1>
  );
};

Heading.displayName = "Heading component";

export default Heading;

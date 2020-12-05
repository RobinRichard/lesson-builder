import React from "react";
import { formatStyles } from "../../utils.js";

const SubHeading = ({ item, onSelect }) => {
  return (
    <h3 style={formatStyles(item.styles)}>
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
    </h3>
  );
};
SubHeading.displayName = "Sub heading text";

export default SubHeading;

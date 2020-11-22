import React from "react";

const Paragraph = ({ item, onSelect }) => {
  return (
    <p style={item.styles}>
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

export const paragrphStyles = { color: "#009688", fontSize: "16px" };

export default Paragraph;

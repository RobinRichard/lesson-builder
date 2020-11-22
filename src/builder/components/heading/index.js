import React from "react";

const Heading = ({ item, onSelect }) => {
  return (
    <h1 style={item.styles}>
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

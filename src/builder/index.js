import React, { Fragment, useState } from "react";
import { Dropdown } from "react-bootstrap";

import Heading from "./components/heading";
import SubHeading from "./components/subHeading";
import Paragraph, { paragrphStyles } from "./components/paragraph";
import { Settings } from "./components/settings";
import { ComplexStyle, Style } from "./styles";

export const Builder = () => {
  const [components, setComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  const addComponent = ({ element, extraStyles = [] }) => {
    setComponents([
      ...components,
      {
        id: components.length + 1,
        component: element,
        value: element.displayName || "some sample content",
        styles: [
          new Style("color", "black", ""),
          new ComplexStyle("margin", 10, 10, 20, 70),
          new ComplexStyle("padding", 40, 0, 40, 0),
          ...extraStyles,
        ],
      },
    ]);
  };

  const onSave = (id, value, styles) => {
    const _component = components.find((c) => c.id === id);
    if (_component) {
      _component.value = value;
      _component.styles = styles;
    }
    const index = components.indexOf((c) => c.id === id);
    components[index] = _component;
    setComponents(components);
    setSelected(null);
  };

  const ComopnentsContainer = () =>
    components.map((item) => (
      <Fragment key={item.id}>
        <item.component item={item} onSelect={setSelected} />
        <hr />
      </Fragment>
    ));

  return (
    <>
      <div className={"row"}>
        <div className={"col-md-6 offset-md-2 mt-4"}>
          <div className={"d-flex justify-content-between"}>
            <div>
              <h2>Builder</h2>
            </div>
            <div className={"row"}>
              <Dropdown>
                <Dropdown.Toggle variant="info">Add components</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      addComponent({ element: Heading });
                    }}
                  >
                    Heading
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      addComponent({ element: SubHeading });
                    }}
                  >
                    Sub heading
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      addComponent({
                        element: Paragraph,
                        extraStyles: paragrphStyles,
                      });
                    }}
                  >
                    Praragraph
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <hr />
          <ComopnentsContainer />
        </div>
        <div className={"col-md-2 mt-4"}>
          {selected && (
            <>
              <h2>Settings</h2>
              <Settings key={selected.id} selected={selected} onSave={onSave} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

class Style {
  constructor(property, value, unit = "px") {
    this.styleProperty = property;
    this.styleValue = value;
    this.unit = unit;
  }

  setStyle(value) {
    this.styleValue = value;
  }

  getStyle() {
    const _style = {};
    _style[this.styleProperty] = `${this.styleValue}${this.unit}`;
    return _style;
  }
}

class ComplexStyle {
  constructor(property, top, right, bottom, left, unit = "px") {
    this.styleProperty = property;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.unit = unit;
  }

  setStyle(top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }

  getStyle() {
    const _style = {};
    _style[this.styleProperty] = [this.top, this.right, this.bottom, this.left]
      .map((s) => `${s}${this.unit}`)
      .join(` `);
    return _style;
  }
}

export { Style, ComplexStyle };

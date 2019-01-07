class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tootipContainer;
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", this._showTooltip);
    tooltipIcon.addEventListener("mouseleave", this._hideTootip);
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = "This is the tooltip text!";
    this.appendChild(this._tooltipContainer);
  }

  _hideTootip() {
      this.removeChild(this._tooltipContainer);
  }
}
customElements.define("my-tooltip", Tooltip);

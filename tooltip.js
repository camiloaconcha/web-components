class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tootipContainer;
        this._tootipText = 'Dummy Text';
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <slot></slot>
        <span>(?)</span>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tootipText = this.getAttribute('text');
        }

        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener(
            'mouseenter',
            this._showTooltip.bind(this)
        );
        tooltipIcon.addEventListener('mouseleave', this._hideTootip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tootipText;
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndex = '10';
        this._tooltipContainer.style.color = 'white';
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTootip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}
customElements.define('my-tooltip', Tooltip);

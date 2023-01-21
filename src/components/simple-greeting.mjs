import { LitElement, css, html } from 'lit';

export class SimpleGreeting extends LitElement {
    static properties = {
        name: {},
    };

    static styles = css`
        :host {
          color: blue;
        }
    `;

    constructor() {
        super();
        this.name = 'World';
    }

    render() {
        return html`<p>Hello, ${this.name}!!!</p>`;
    }
}
customElements.define('simple-greeting', SimpleGreeting);

import { LitElement, css, html  } from 'lit';

export class NameChanger extends LitElement {
    constructor() {
        super();
    }

    async handleClick() {
        const name = this.input.value;

        const response = await (await fetch('/api/name', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        })).json();

        if (response.status === 'ok') {
            const event = new CustomEvent('name-changed', {
                detail: { name },
                bubbles: true,
                composed: true
            });

            this.dispatchEvent(event);
            this.input.value = '';
        } else {
            console.error('boom');
        }
    }

    get input() {
        return this.renderRoot?.querySelector('input') ?? null;
    }

    render() {
        return html`
            <input placeholder="Name?" />
            <button @click=${this.handleClick}>OK</button>
        `;
    }
}
customElements.define('name-changer', NameChanger);

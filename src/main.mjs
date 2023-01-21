import { SimpleGreeting } from './components/simple-greeting.mjs';
import { NameChanger } from './components/name-changer.mjs';

async function init() { 
    const response = await (await fetch('/api/name')).json();

    const app = document.getElementById('app');

    const nameChanger = new NameChanger();
    const simpleGreeting = new SimpleGreeting();

    nameChanger.addEventListener('name-changed', (e) => simpleGreeting.name = e.detail.name);
    simpleGreeting.name = response.name;

    app.append(
        nameChanger,
        simpleGreeting
    );
}

init();

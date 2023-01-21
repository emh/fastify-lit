import './components/simple-greeting.mjs';

async function init() { 
    const response = await (await fetch('/api/name')).json();

    document.getElementById('app').innerHTML = `<simple-greeting name=${response.name}></simple-greeting>`;
}

init();

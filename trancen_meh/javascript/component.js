import { Home } from './home.js';
import { SettingComponent } from './settings.js';


export class BodyComponent extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		const bodyContent = document.querySelector("body-component");
		bodyContent.innerHTML = "";
		const home = new Home;
		bodyContent.appendChild(home);
	}
}

customElements.define("body-component", BodyComponent);

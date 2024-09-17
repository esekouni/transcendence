import { SettingComponent } from './settings.js';


class BodyComponent extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		const bodyContent = document.querySelector("body-component");
		fetch('../html/game_home.html')
		.then(response => response.text())
		.then(data => {
			this.innerHTML = data;
		})
		.catch(error => {
			console.error('Error fetching the HTML file:', error);
		});
	}
}

customElements.define("body-component", BodyComponent);
document.getElementById('shop-link').addEventListener('click', to_shop);
document.getElementById('home-link').addEventListener('click', to_home);
document.getElementById('settings_link').addEventListener('click', to_settings);



function to_shop() {
	const bodyContent = document.querySelector("body-component");
	fetch('../html/shop.html')
	.then(response => response.text())
	.then(data => {
		bodyContent.innerHTML = data;
	})
	.catch(error => {
		console.error('Error fetching the HTML file:', error);
	});
}

function to_home() {
	const bodyContent = document.querySelector("body-component");
	fetch('../html/game_home.html')
	.then(response => response.text())
	.then(data => {
		bodyContent.innerHTML = data;
	})
	.catch(error => {
		console.error('Error fetching the HTML file:', error);
	});
}


function to_settings() {
		const bodyContent = document.querySelector("body-component");
		bodyContent.innerHTML = "";
	
		const settingComponent = document.createElement('setting-component');
		bodyContent.appendChild(settingComponent);
}

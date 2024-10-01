import { BodyComponent } from './component.js';
import { Shop } from './shop.js';
import { Home } from './home.js';
import { SettingComponent } from './settings.js';

class LeftBare extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `<div id="left-bar">
					<div id=logo-pong> <img  src="../images/logo-pong.png" alt="logo-pong" width="50%" height="50%"></div> 
					<div id="iconsContainer">
						<a id="home-link">
							<div class="home">
								<img src="../images/home.svg" alt="home">
							</div>
						</a>
						<div class="home">
							<img src="../images/la_user-friends.svg" alt="home">
						</div>
						<div class="home circle">
							<img src="../images/icon _Chat_.svg" alt="home">				
						</div>
						<a id="">
							<div class="home">
								<img src="../images/Group.svg" alt="home">				
							</div>
						</a>
						<a id="shop-link">
							<div class="home">
								<img src="../images/shop.svg" alt="home">
							</div>
						</a>
						<a id="settings_link">
							<div class="home">
								<img src="../images/settings.svg" alt="home">
							</div>
						</a>
					</div>
					<div class="accountContainer">
						<img src="../images/image-profile.png" alt="home" >

					</div>
				</div>`
	
	this.querySelector('#shop-link').addEventListener('click', to_shop);
	this.querySelector('#home-link').addEventListener('click', to_home);
	this.querySelector('#settings_link').addEventListener('click', to_settings);

	function to_shop() {
		const bodyContent = document.querySelector("body-component");
		bodyContent.innerHTML = "";
	
		const shop = new Shop;
		bodyContent.appendChild(shop);
	}

	function to_home() {
		const bodyContent = document.querySelector("body-component");
		bodyContent.innerHTML = "";
	
		const home = new Home;
		bodyContent.appendChild(home);
	}


	function to_settings() {
			let bodyContent = document.querySelector("body-component");
			bodyContent.innerHTML = "";

			const setting = new SettingComponent;
			bodyContent.appendChild(setting);
	}
	}
}

customElements.define("left-bare", LeftBare);
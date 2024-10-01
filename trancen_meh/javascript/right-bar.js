import { BodyComponent } from './component.js';
import { Shop } from './shop.js';
import { Home } from './home.js';
import { SettingComponent } from './settings.js';

class RightBar extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `<div class="right-bar1">
				<div class="right-bar1_">
					<div id="logo-pong "> <img  src="../images/image-player.svg" alt="profile" width="100%" height="100%"></div>
					<div id="iconsContainer ">
						<div class="friends">
							<img  src="../images/F-nav.svg" alt="F-nav" width="60%" height="60%">
						</div>
					</div>
				</div>
			</div>
			<div class="right-bar2">
				<div class="right-bar2_">
					<div id="logo-pong "> <img  src="../images/icon _Chat_.svg" alt="profile" width="100%" height="100%"></div>
					<div id="iconsContainer ">
						<div class="friendscircle">
							<img  src="../images/F-nav.svg" alt="F-nav">
						</div>
					</div>
					
				</div> 
			</div>`
	
	}
}

customElements.define("right-bare", RightBar);
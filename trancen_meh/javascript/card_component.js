export class Card extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `
			<div class="card">
				<div class="img_class">
					<img src="./images/EARTH-BALL(1).png" width="40%">
				</div>
				<div class="h_class">
					<h1 class="color"> EARTH BALL</h1>
				</div>
				<div class="h_class">
					<h3 class="color"> ball </h3*>
				</div>
				<div class="h_class">
					<h3 class="color"> 500 $ </h3>
				</div>
				<div class="h_class">
					<button> buy </button>
				</div>
			</div>
		`;
	}
}

customElements.define("card-element", Card);
export class Test extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML=`
		<div id="img_players_left"> 
		<div id="img_player_1">
		</div>
		<div id="img_player_2">
		</div>
		</div>
		<div id="lines">
			<left-line>
			</left-line>
		</div>
		`
	}
}

customElements.define("test-element", Test);
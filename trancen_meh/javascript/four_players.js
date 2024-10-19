import { LeftLine } from "./left_line.js";
import { RightLine } from "./right_line.js";

		// <div id="img_players_left"> 
		// 	<div id="img_player_1">
		// 	</div>
		// 	<div id="img_player_2">
		// 	</div>
		// </div>
		// <div id="lines">
		// 	<left-line>
		// 	</left-line>
		// </div>
export class FourPlayers extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `
		<div id="TOURNEMENT">
			<div class="line">
			</div>
			<div class="TOURNEMENT_">
				<h1> TOURNEMENT </h1>
			</div>
			<div class="line">
			</div>
		</div>
		<div id="tour_4_players">
			<div class="container_left_line">
				<left-line>
				</left-line>
			</div>
			<div id="final_img">
				<div id="player_final_left">
					<div class="img_player_">
					</div>
				</div>
				<div id="img__player_winner">
					<div id="img__"> 
					<img src="../images/Group1452.svg" width="100%" height="100%">
					</div>
					<div id="player_winner_star">
						<img src="../images/star.svg" width="20%" height="20%">
						<div class="img_player_final">
						</div>
					</div>
				</div>
				<div id="player_final_right">
					<div class="img_player_">
					</div>
				</div>
			</div>
			<div class="container_left_line">
				<right-line>
				</right-line>
			</div>
		</div>
		<div id="winner_quit">
			<div id="winner">
				<h1 id="display_winner"> WINNER </h1>
			</div>
			<div id="quit">
				<button id="quit-button">Quit</button>
			</div>
		</div>
				`;
	}
	connectedCallback()
	{
		
	}
}

customElements.define("four-players", FourPlayers);

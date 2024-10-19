import { LeftLine } from "./left_line.js";
import { RightLine } from "./right_line.js";
import { FourPlayers } from "./four_players.js";

export class EightPlayers extends HTMLElement
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
				<div class="tour_8_players">
					<div class="quarter_final_left">
						<div class="quarter_final_left_">
							<left-line>
							</left-line>
						</div>
						<div class="quarter_final_left_">
							<left-line>
							</left-line>
						</div>
					</div>
					<div class="demi_final_left">
						<left-line>
						</left-line>
					</div>
					<div class="final">
						<div class="img_player_">
						</div>
					</div>
					<div class="demi_final_right">
						<right-line>
						</right-line>
					</div>
					<div class="quarter_final_right">
						<div class="quarter_final_left_">
							<right-line>
							</right-line>
						</div>
						<div class="quarter_final_left_">
							<right-line>
							</right-line>
						</div>
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

customElements.define("eight-players", EightPlayers);

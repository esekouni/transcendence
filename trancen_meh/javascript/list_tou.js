import { JoinTournament } from './join_tour.js' ;

export class ListTournament extends HTMLElement
{
	constructor()
	{
		super();
		this.innerHTML = `
		<div id="TOURNEMENT">
			<div class="line">
			</div>
			<div class="JOIN_">
				<h1> LIST  TOURNEMENT </h1>
			</div>
			<div class="line">
			</div>
		</div>
		<div id="container-tour">
		</div>
		`
		// setTimeout(() => this.fetchTournaments(), 0);
	}
	// async fetchTournaments() {
	// 	const response = await fetch('http://127.0.0.1:8000/chat/tournemnent/');
	// 	const tournaments = await response.json();
		
	// 	const tournamentList = document.getElementById('container-tour');
	// 	// const tournamentList = this.querySelector('#container-tour');
	// 	console.log(tournamentList);
	// 	// tournamentList.innerHTML = '';

	// 	if (tournaments.length === 0) {
	// 		alert("No tournaments available.");
	// 	} else {
	// 		tournaments.forEach(tournament => {
	// 			const joinTournamentElement = new JoinTournament();
    //             joinTournamentElement.setAttribute('name', tournament.name);
    //             tournamentList.appendChild(joinTournamentElement);
	// 		});
	// 	}
	// };
}

customElements.define("list-tournament", ListTournament);
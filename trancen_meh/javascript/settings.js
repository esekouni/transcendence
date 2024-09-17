
export class SettingComponent extends HTMLElement
{
	constructor()
	{
		super();
	}
	connectedCallback()
	{
		const bodyContent = document.querySelector("setting-component");
		fetch('../html/settings1.html')
			.then(response => response.text())
			.then(data => {
				this.innerHTML = data;
				// console.log(data);
				this.querySelector("#switch").addEventListener("click", to_settings2);

			})
			.catch(error => {
				console.error('Error fetching the HTML file:', error);
			});
	}
}

customElements.define("setting-component", SettingComponent);

function to_settings2()
{	
	const bodyContent = document.querySelector("setting-component");
	fetch('../html/settings2.html')
	.then(response => response.text())
	.then(data => {
		bodyContent.innerHTML = data;
	})
	.catch(error => {
		console.error('Error fetching the HTML file:', error);
	});
}
// const tmp = document.querySelector("switch")


// console.log("test........");
// console.log(document.documentElement);
// console.log(tmp);
// document.getElementById("switch").addEventListener("click", to_settings2);

// }
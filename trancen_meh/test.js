class BodyComponent extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `hello world`;
		console.log("connected....");
	}
}
// let tmp = document.getElementById("section2");

// console.log(tmp);

customElements.define("body-component", BodyComponent);

// console.log("###########");
// console.log("###########");

function tosettings() {
	// let setting = document.getElementById("mehdi");
	// console.log(setting);
	const bodyContent = document.querySelector("body-component");
	// bodyContent.innerHTML = setting;
	fetch('settings.html')
			.then(response => response.text())
			.then(data => {

				// Create a temporary element to hold the fetched HTML
				const tempDiv = document.createElement('div');
				// console.log(data);
				tempDiv.innerHTML = data;
				
				// Extract the content of the specific div from the fetched HTML
				const newContent = tempDiv.querySelector('#mehdi').innerHTML;
	
				// Replace the content of the target div in the main HTML file
				bodyContent.innerHTML = newContent;
			})
			.catch(error => {
				console.error('Error fetching the HTML file:', error);
			});
}


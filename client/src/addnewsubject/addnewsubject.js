import {HttpClient, json} from 'aurelia-fetch-client'

export class AddSubject {

	userData = {};

	addSubject() {
		let client = new HttpClient();
		let url = 'http://localhost:8080/subject/get/mata';

		console.log("Serverile saadetakse: " + JSON.stringify(this.userData));
	    client.fetch(url, {
	    	'method': "POST",
	    	'body': json(this.userData)
	    })
	        .then(response => response.json())
	        .then(data => {
				
	        	console.log("Server saatis: " + JSON.stringify(data));
	    });
			console.log("addSubject method executed!");
	}
}
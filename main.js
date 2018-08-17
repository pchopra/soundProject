
function Person (first, last, src) {
    this.firstName = first;
    this.lastName = last;
    this.imgSrc = src;
}

var kvArray = [['Parth', new Person("Parth", "Chopra", "images/parth_pic.jpg")], 
				['Adi', new Person("Aditya", "Raju", "images/adi_pic.jpg")],
				['Jason', new Person("Jason", "Cui", "images/jason_pic.jpg")]
			];

var map = new Map(kvArray);

function loadInformation(content) {
	var profilePic = document.querySelector('[profile]');
    var nameProfile = document.querySelector('[profileName]');
	
	if(map.has(content)) {
		//Rider is supposed to be on this vehicle
		var rider = map.get(content)
  
	    nameProfile.textContent = rider.firstName + " " + rider.lastName;
	    profilePic.src = rider.imgSrc;
	}
}

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

	
	if(map.has(content)) {
		//Rider is supposed to be on this vehicle
		//correctRider(content, correctFade);
		
		var profilePic = document.querySelector('[profile]');
    	var nameProfile = document.querySelector('[profileName]');

		var rider = map.get(content)

  		profilePic.onload = function() {
  			$('#verification').css("transition", "background-color 1s").css("height", "" + profilePic.naturalHeight).css("top", "" + profilePic.offsetTop)
  				.css("background-color", "green");
  		// $("#profileInformation").css("transition", "background-color 1s")
  		// 	.css("background-color", "green")

  		}

	    profilePic.src = rider.imgSrc;
		//$("#profileInformation").css("transition", "background-color 1s").css("background-color", "green")
		nameProfile.textContent = "Welcome to your ride " + rider.firstName + "!";
	}

}

// function correctRider(content, callback) {
// 		var profilePic = document.querySelector('[profile]');
//     	var nameProfile = document.querySelector('[profileName]');
// 		var rider = map.get(content)
  
// 	    nameProfile.textContent = rider.firstName + " " + rider.lastName;
// 	    profilePic.src = rider.imgSrc;

// 	    callback();
// }

// function correctFade() {
// 	$("#profileInformation").hide("slide", { direction: "left" }, 1000);
// }
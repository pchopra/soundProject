
function Person (first, last, src, bool) {
    this.firstName = first;
    this.lastName = last;
    this.imgSrc = src;
    this.check = bool;
}

var kvArray = [['Parth', new Person("Parth", "Chopra", "images/parth_pic.jpg")], 
				['Adi', new Person("Aditya", "Raju", "images/adi_pic.jpg")],
				['Jason', new Person("Jason", "Cui", "images/jason_pic.jpg")]
			];

var map = new Map(kvArray);

var check = [];
var answer = ['Parth', 'Adi', 'Jason'];

function loadInformation(content) {

	
	if(map.has(content)) {
		//Rider is supposed to be on this vehicle
		//correctRider(content, correctFade);
		
		var profilePic = document.querySelector('[profile]');
    	var nameProfile = document.querySelector('[profileName]');

		var rider = map.get(content);

		check.push(content);

  		profilePic.onload = function() {
  			console.log(profilePic.naturalHeight + " " + profilePic.naturalWidth);
  			$('#verification').css("transition", "background-color 1s").css("height", "" + profilePic.naturalHeight).css("top", "" + profilePic.offsetTop)
  				.css("background-color", "green");
  		// $("#profileInformation").css("transition", "background-color 1s")
  		// 	.css("background-color", "green")

  		}

	    profilePic.src = rider.imgSrc;
		//$("#profileInformation").css("transition", "background-color 1s").css("background-color", "green")
		nameProfile.textContent = "Welcome to your ride " + rider.firstName + "!";
		$('#title').text("VERIFIED").css("color", "green").css("padding-left", "17%");
		$('#passengers').text("Passengers: " + check.join(", ")).css("padding-left", "6%");

		map.get()
	}
	else {
		var profilePic = document.querySelector('[profile]');
    	var nameProfile = document.querySelector('[profileName]');


	    profilePic.src = "images/denied.jpg";
	     profilePic.onload = function() {
  			console.log(profilePic.naturalHeight + " " + profilePic.naturalWidth);

  		}
		//$("#profileInformation").css("transition", "background-color 1s").css("background-color", "green")
		nameProfile.textContent = "This is not a valid passenger";
		$('#title').text("UNVERIFIED").css("color", "red").css("padding-left", "20%");
	}

	checkStartRide();

}

function arrayContainsArray (superset, subset) {
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}

function checkStartRide() {

	// var readyRide = false;

	// for (k in answer) {
	// 	if(check.includes(k) == "false") {
	// 		console.log("HERE " + answer + " " + check);
	// 		readyRide = true;
	// 	}
	// }
	// console.log("ReadyRide " + readyRide + " Contents: " + check);

	// if(readyRide) {
	// 	$('#startRide').css("visibility", "visible");
	// }

	var readyRide = arrayContainsArray(check, answer)
	if(readyRide) {
		$('#startRide').css("visibility", "visible");
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
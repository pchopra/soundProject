
function Person (first, last, src) {
    this.firstName = first;
    this.lastName = last;
    this.imgSrc = src;
}

var kvArray = [['Parth', new Person("Parth", "Chopra", "parth_pic.jpg")], ['Adi', new Person("Aditya", "Raju", "adi_pic.jpg")]];
var map = new Map(kvArray);

function loadInformation(content) {
	var profile = document.querySelector('[profile]');
    var nameProfile = document.querySelector('[profileName]');
	var rider = map.get(content)
    
    nameProfile.textContent = rider.firstName + " " + rider.lastName;
    profile.src = rider.imgSrc;
}
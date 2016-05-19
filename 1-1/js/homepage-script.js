// Jsom simulation of information for filter
var filter = 
{
	"locations": ["Chicago", "New York", "Califonia", "Michigan"],
	"serviceTypes": ["Driving Learning", "Homework Tutor", "BBQ Even Hosting", "Short term Transport"],
	"prices": ["Lower than $20", "$20-$40", "$40-$100", "Upper than $100"]
};

// Json simulation of user data for madal
var user_data =
{
	"user": [{
		"name": "Archer Park",
		"years": "Freshman",
		"phone": 8993259259,
		"photo": "http://placehold.it/250x250?text=1",
		"serviceList": ["servie 1", "servie 2", "servie 3", "servie 4"]
	},{
		"name": "Ferdinand Badcoke",
		"years": "Senior",
		"phone": 3426974812,
		"photo": "http://placehold.it/250x250?text=2",
		"serviceList": ["servie 5", "servie 6"]
	},{
		"name": "Rob Michaels",
		"years": "Senior",
		"phone": 6005468735,
		"photo": "http://placehold.it/250x250?text=3",
		"serviceList": ["servie 7", "servie 8", "servie 9", "servie 10", "servie 11", "servie 12"]
	},{
		"name": "Theodora Bourke",
		"years": "Junior",
		"phone": 8705904472,
		"photo": "http://placehold.it/250x250?text=4",
		"serviceList": ["servie 13", "servie 14", "servie 15"]
	},{
		"name": "Floretta Norris",
		"years": "Freshman",
		"phone": 8797714338,
		"photo": "http://placehold.it/250x250?text=5",
		"serviceList": ["servie 16", "servie 17", "servie 18", "servie 19"]
	},{
		"name": "Evangelina Frost",
		"years": "Junior",
		"phone": 7451636580,
		"photo": "http://placehold.it/250x250?text=6",
		"serviceList": ["servie 19"]
	},{
		"name": "Jamey Eads",
		"years": "Sophomore",
		"phone": 2432160871,
		"photo": "http://placehold.it/250x250?text=7",
		"serviceList": ["servie 20", "servie 21", "servie 22", "servie 23", "servie 24"]
	},{
		"name": "Gladwin Spurling",
		"years": "Sophomore",
		"phone": 5387075133,
		"photo": "http://placehold.it/250x250?text=8",
		"serviceList": ["servie 25", "servie 26", "servie 27"]
	},{
		"name": "Ryanne Payne",
		"years": "Senior",
		"phone": 4839258854,
		"photo": "http://placehold.it/250x250?text=9",
		"serviceList": ["servie 28", "servie 29"]
	},{
		"name": "Rudolph Mould",
		"years": "Senior",
		"phone": 4333320531,
		"photo": "http://placehold.it/250x250?text=10",
		"serviceList": ["servie 30"]
	},{
		"name": "Michael Monday",
		"years": "Junior",
		"phone": 9451851318,
		"photo": "http://placehold.it/250x250?text=11",
		"serviceList": ["servie 31", "servie 32", "servie 33", "servie 34"]
	},{
		"name": "Hamilton Jerome",
		"years": "Freshman",
		"phone": 1437784257,
		"photo": "http://placehold.it/250x250?text=12",
		"serviceList": ["servie 35", "servie 36", "servie 37", "servie 38", "servie 39"]
	}]
};



// add the filter data into the filter from filter Json data
function displayFilter(){

	// add the location into the location filter
	for (loca in filter.locations) {
		var formattedLocation = HTMLfilterLocation.replace("%data%", filter.locations[loca]);
		$('#location-list:last').append(formattedLocation);
	}

	// add the service type into the service type filter
	for (serviceType in filter.serviceTypes) {
		var formattedserviceType = HTMLfilterServiceType.replace("%data%", filter.serviceTypes[serviceType]);
		$('#service-type-list:last').append(formattedserviceType);
	}

	// add the price into the price filter
	for (price in filter.prices) {
		var	formattedPrice = HTMLfilterPrice.replace("%data%", filter.prices[price]);
		$('#price-list:last').append(formattedPrice);
	}

}
displayFilter();

// add the thumbnail box into the content box by determine the number of user
function showThumbnail(){
	// add thumbnail into the page
	var numberOfUser = user_data.user.length;
	for(i=0;i<numberOfUser;i++){
		var indexNum = i+1;
		var formattedThumbnailDiv = HTMLthumbnailDiv.replace("%data%", indexNum);
		var formattedThumbnailHref = HTMLthumbnailHref.replace("%data%", indexNum);	
		var formattedThumbnailImg = HTMLthumbnailImg.replace("%data%", indexNum);
		$('#thumbnail-row').append(formattedThumbnailDiv);
		$('#thumbnail-row').find("#thumbnailDiv-" + indexNum).append(formattedThumbnailHref);
		$('#thumbnailDiv-' + indexNum).find("#thumbnailHref-" + indexNum).append(formattedThumbnailImg);
	}
}
showThumbnail();

// add the user data from user data Json file into the modal platform
function showThumbnailModal(){
	$('#thumbnail-row .thumbnail').click(function(){

		// initialize the modal
		if($('#head-name').next().is('#body-name')){
			$('#head-name').next().remove();
		}
		if($('#head-years').next().is('#body-years')){
			$('#head-years').next().remove();
		}
		if($('#head-phone').next().is('#body-phone')){
			$('#head-phone').next().remove();
		}
		if($('#profile-photo').children().is('img')){
			$('#profile-photo').children().remove();
		}
		while($('#service-provided-list').children().is('li')){
			$('#service-provided-list').children().remove();
		}

		// fill in the data into the madal
		var i = parseInt($(this).find("img").attr("index"),10) - 1;
		var formattedThumbnailModalName = HTMLthumbnailModalName.replace("%data%", user_data.user[i].name);
		var formattedThumbnailModalYears = HTMLthumbnailModalYears.replace("%data%", user_data.user[i].years);
		var formattedThumbnailModalPhone = HTMLthumbnailModalPhone.replace("%data%", user_data.user[i].phone);
		var formattedThumbnailModalProfilephoto = HTMLthumbnailModalProfilephoto.replace("%data%", user_data.user[i].photo);
		$('#head-name').after(formattedThumbnailModalName);
		$('#head-years').after(formattedThumbnailModalYears);
		$('#head-phone').after(formattedThumbnailModalPhone);
		$('#profile-photo').append(formattedThumbnailModalProfilephoto);		

		for(servies in user_data.user[i].serviceList){
			var formattedThumbnailModalServiceList = HTMLthumbnailModalServiceList.replace("%data%", user_data.user[i].serviceList[servies]);
			$('#service-provided-list').append(formattedThumbnailModalServiceList);
		}
		
	});
}
showThumbnailModal();

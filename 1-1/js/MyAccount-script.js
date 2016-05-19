// user infomation Json simulation
var user_info = 
{
	"name": "Keppa",
	"currentActives": [{
		"index": 1,
		"customer": "John",
		"time": "10:00-12:00,05/14/2016",
		"service": "Driving Learning"
	},{
		"index": 2,
		"customer": "Cachy",
		"time": "13:00-14:00,05/17/2016",
		"service": "Driving Learning"
	},{
		"index": 3,
		"customer": "Tim",
		"time": "17:15-17:45,05/22/2016",
		"service": "Long-term transport"
	},{
		"index": 4,
		"customer": "John",
		"time": "10:00-12:00,05/14/2016",
		"service": "Driving Learning"
	},{
		"index": 5,
		"customer": "Cachy",
		"time": "13:00-14:00,05/17/2016",
		"service": "Driving Learning"
	},{
		"index": 6,
		"customer": "Tim",
		"time": "17:15-17:45,05/22/2016",
		"service": "Long-term transport"
	},{
		"index": 7,
		"customer": "John",
		"time": "10:00-12:00,05/14/2016",
		"service": "Driving Learning"
	},{
		"index": 8,
		"customer": "Cachy",
		"time": "13:00-14:00,05/17/2016",
		"service": "Driving Learning"
	},{
		"index": 9,
		"customer": "Tim",
		"time": "17:15-17:45,05/22/2016",
		"service": "Long-term transport"
	},{
		"index": 10,
		"customer": "John",
		"time": "10:00-12:00,05/14/2016",
		"service": "Driving Learning"
	},{
		"index": 11,
		"customer": "Cachy",
		"time": "13:00-14:00,05/17/2016",
		"service": "Driving Learning"
	}],

	"postedServices": [{
		"index": 1,
		"serviceName": "Driving Learning",
		"time": "01/11/2016-03/29/2016",
		"price": 45
	},{
		"index": 2,
		"serviceName": "Longterm transport",
		"time": "02/01/2016-06/09/2016",
		"price": 300
	},{
		"index": 3,
		"serviceName": "Driving Learning",
		"time": "01/11/2016-03/29/2016",
		"price": 45
	},{
		"index": 4,
		"serviceName": "Longterm transport",
		"time": "02/01/2016-06/09/2016",
		"price": 300
	},{
		"index": 5,
		"serviceName": "Driving Learning",
		"time": "01/11/2016-03/29/2016",
		"price": 45
	}]
}


// add the user name into welcome sentance
function addName(){
	var formattedWelcomeName = HTMLwelcomeName.replace("%data%", user_info.name);
	$('#account-jumbotron').prepend(formattedWelcomeName);
}
addName();

function scheduleTable(){
	if(user_info.currentActive === ""){
		$('#activity-table').append(HTMLnoActivity);
	}
	else{
		$('#activity-table').append(HTMLhasActivity);

		for(acti in user_info.currentActives){
			var formattedTableRow = HTMLaddTableRow.replace("%data%", acti);
			var formattedIndexNum = HTMLaddIndexNum.replace("%data%", user_info.currentActives[acti].index);
			var formattedCustomerName = HTMLaddCustomerName.replace("%data%", user_info.currentActives[acti].customer);
			var formattedTime = HTMLaddTime.replace("%data%", user_info.currentActives[acti].time);
			var formattedServiceName = HTMLaddServiceName.replace("%data%", user_info.currentActives[acti].service);
			$('#table-body').append(formattedTableRow);
			$('#table-row-'+acti).append(formattedIndexNum);
			$('#table-row-'+acti).append(formattedCustomerName);
			$('#table-row-'+acti).append(formattedTime);
			$('#table-row-'+acti).append(formattedServiceName);
		}
	}
}
scheduleTable();

function manageServicesTable(){	
	if(user_info.postedServices === ""){
		$('#modal-manage-service-table').append(HTMLnoPostedService);
	}
	else{
		$('#modal-manage-service-table').append(HTMLhasPostedService);
		for(ser in user_info.postedServices){
			var formattedModalTableRow = HTMLaddModalTableRow.replace("%data%", ser);
			var formattedModalIndexNum = HTMLaddModalIndexNum.replace("%data%", user_info.postedServices[ser].index);
			var formattedModalServceName = HTMLaddModalServiceName.replace("%data%", user_info.postedServices[ser].serviceName);
			var formattedModalTime = HTMLaddModalTime.replace("%data%", user_info.postedServices[ser].time);
			var formattedModalPrice = HTMLaddModalPrice.replace("%data%", user_info.postedServices[ser].price);
			var formattedModalBtnGroup = HTMLaddModalBtnGroup.replace("%data%", ser);
			$('#modal-table-body').append(formattedModalTableRow);
			$('#modal-table-row-'+ser).append(formattedModalIndexNum);
			$('#modal-table-row-'+ser).append(formattedModalServceName);
			$('#modal-table-row-'+ser).append(formattedModalTime);
			$('#modal-table-row-'+ser).append(formattedModalPrice);
			$('#modal-table-row-'+ser).append(formattedModalBtnGroup);
			$('#modal-btn-group-'+ser).append(HTMLaddModalEditeBtn);
			$('#modal-btn-group-'+ser).append(HTMLaddModalDeleteBtn);
		}
	}
}
manageServicesTable();


// add the table into the popover
function addTableIntoPopover(){
	$('[data-toggle=popover]').popover({
    	content: $('#manage-popover-table').html(),
    	html: true
	});
}
addTableIntoPopover();

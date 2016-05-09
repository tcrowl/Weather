import {
	Template
} from 'meteor/templating';
import {
	CityData
} from '../api/city_data.js';
//import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';

// Template.cityList.onCreated(function() {


// });

Template.body.helpers({
	cityOpts: [{
		name: '',
		value: ''
	}, {
		name: 'Ennis',
		value: '75119'
	}, {
		name: 'Midland',
		value: '79705'
	}],
	tableSettings: function() {
		return {
			rowsPerPage: 10,
			showFilter: true,
			fields: [{
				key: 'name',
				label: 'City'
			}, {
				key: 'zipcode',
				label: 'Zip Code'
			}, {
				key: 'current',
				label: 'Current',
				fn: function() {
					return new Spacebars.SafeString('<button type="button" id="currentBtn" class="currentBtn">Current</button>')
				}
			}, {
				key: 'history',
				label: 'History',
				fn: function() {
					return new Spacebars.SafeString('<button type="button" id="historyBtn" class="historyBtn">History</button>')
				}
			}]
		};
	},

	city_data: function() {
		return CityData.find({});
	},

});

Template.body.events({
	'change #city': function(event, template) {
		var zip = $(event.currentTarget).val();
		console.log("city zip: ", zip);
	},
	'click .historyBtn' : function(event, template){
		console.log('history button event: ', event);
	},
	 'click .currentBtn' : function(event, template){
		console.log('current button event: ', event);
	},
	// 'click .reactive-table tbody tr': function(event) {
	// 	event.preventDefault();
	// 	var objThis = this;
	// 	// checks if the actual clicked element has the class `deletebtn `
	// 	if (event.target.className == "currentBtn") {
	// 		console.log('current this: ', objThis);
	// 		// console.log(objThis._id);
	// 	} else if (event.target.className == "historyBtn") {
	// 		console.log('history this: ', objThis);
	// 	}
	// }
});
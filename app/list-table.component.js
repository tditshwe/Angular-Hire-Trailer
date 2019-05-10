'use strict';

angular.module("listTable").component("listTable", {
	templateUrl: 'templates/list-table.template.html',
	controller: function tableController()
	{
		this.colspan = this.headers.length;
	},
	bindings: {
		title: '@',
		itemList: '<',
		headers: '<'
	}
});
var app = angular.module('myDirective', []);

app.directive('pending', function() {
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attrs) {
			var spinner = angular.element("<div><img src='http://i.stack.imgur.com/MnyxU.gif' /></div>").hide();
			elem.after(spinner)
			elem.bind('click', function(event) {
				spinner.show();
				elem.text('Getting');
				scope.request().then(function() {
					elem.text('Submit');
					spinner.hide();
				})
			})
		}
	};
});

app.directive('notify', function() {
	return {
		restrict: 'AE',
		scope: {
			title: '=',
			body: '=',
			icon: '='
		},
		link: function(scope, elem, attrs) {
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    		Notification.requestPermission(function (permission) {
                console.log(permission);
            });
		}

	}
})






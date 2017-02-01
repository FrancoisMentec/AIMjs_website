app.controller('HomeController', ['$scope', function ($scope) {
	$.get('/README.html', function (data) {
		$('#readme').html(data)
	})
}])

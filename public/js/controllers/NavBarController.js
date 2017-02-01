app.controller('NavBarController', ['$scope', '$location', function ($scope, $location) {
	$scope.links = [
    {
			url: '/',
			name: 'Home',
			target: '',
			active: ''
		},
    {
			url: '/examples',
			name: 'Examples',
			target: '',
			active: ''
		},
    {
			url: 'https://github.com/FrancoisMentec/AIMjs',
			name: 'GitHub',
			target: '_blank',
			active: ''
		}/*,
    {
			url: '/doc',
			name: 'Doc',
			target: '',
			active: ''
		}*/]

	$scope.urlChange = function () {
		for (link in $scope.links) {
			if ($scope.links[link].url === $location.path()) {
				$scope.links[link].active = 'active'
			} else {
				$scope.links[link].active = ''
			}
		}
	}

	$scope.$on('$routeChangeSuccess', function () {
			$scope.urlChange()
		}
	)

	$(document).scroll(function(){
		if ($(document).scrollTop() > 0) {
			$('#nav-bar').addClass('scrolled')
		} else {
			$('#nav-bar').removeClass('scrolled')
		}
	})
}])

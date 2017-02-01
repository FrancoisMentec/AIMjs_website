app.controller('ExamplesController', ['$scope', function ($scope) {
	$scope.examples = [
    {
			url: '/examples/glass-reverse',
			name: 'Glass Reverse',
      image: '/image/glass.jpg'
		},
    {
			url: '/examples/8-puzzle',
			name: '8 Puzzle',
      image: '/image/8-puzzle.png'
		}]
}])

app.controller('8PuzzleController', ['$scope', function ($scope) {
  $scope.execute = function () {
    eightPuzzleExecute()
  }

  $scope.tabs = new Tabs($('#8-puzzle-container'))

  $scope.resultTab = new Tab('Result', $("<div id='8-puzzle-result'>"))
  $scope.tabs.addTab($scope.resultTab)

  $scope.treeTab = new Tab('Tree', $("<div id='8-puzzle-tree'>"))
  $scope.tabs.addTab($scope.treeTab)

  $scope.codeTab = new Tab('Code', $("<div id='8-puzzle-code' class='example-code'>"))
  $scope.tabs.addTab($scope.codeTab)

  $scope.editor = ace.edit('8-puzzle-code')
  $scope.editor.setReadOnly(true)
  $scope.editor.getSession().setMode('ace/mode/javascript')

	$.get('/js/AI-8-puzzle.js', function (data) {
    $scope.editor.setValue(data, -1)
  })
}])

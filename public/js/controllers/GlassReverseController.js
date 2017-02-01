app.controller('GlassReverseController', ['$scope', function ($scope) {
  $scope.execute = function () {
    glassReverseExecute()
  }

  $scope.tabs = new Tabs($('#glass-reverse-container'))

  $scope.resultTab = new Tab('Result', $("<div id='glass-reverse-result'>"))
  $scope.tabs.addTab($scope.resultTab)

  $scope.treeTab = new Tab('Tree', $("<div id='glass-reverse-tree'>"))
  $scope.tabs.addTab($scope.treeTab)

  $scope.codeTab = new Tab('Code', $("<div id='glass-reverse-code' class='example-code'>"))
  $scope.tabs.addTab($scope.codeTab)

  $scope.editor = ace.edit('glass-reverse-code')
  $scope.editor.setReadOnly(true)
  $scope.editor.getSession().setMode('ace/mode/javascript')

	$.get('/js/AI-glass-reverse.js', function (data) {
    $scope.editor.setValue(data, -1)
  })
}])

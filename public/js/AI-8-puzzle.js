/*
That AI is an example of use of AIMjs
Rules :
  A classic 8 puzzle.
State :
  A 2 dimension array, 0 is for the empty tile.
*/
var initState1 = {
  grid: [
    [0, 1, 3],
    [4, 2, 5],
    [7, 8, 6]
  ],
  x: 0,
  y: 0,
  previousMove: 'none'
}

var initState2 = {
  grid: [
    [8, 4, 2],
    [7, 5, 6],
    [3, 1, 0]
  ],
  x: 2,
  y: 2,
  previousMove: 'none'
}

var finalState = {
  grid: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
  ]
}

var eightPuzzleAI = AIM.AI({
  //Initial State
  initState: initState2,
  //Final State
  finalState: finalState,
  //A function a returns all successors for a specified state
  getSuccessors: function (state) {
    var successors = []
    //left
    if (state.x > 0 && state.previousMove !== 'right') {
      var newState = AIM.clone(state);
      newState.grid[newState.y][newState.x] = newState.grid[newState.y][--newState.x]
      newState.grid[newState.y][newState.x] = 0
      newState.previousMove = 'left'
      successors.push(newState)
    }
    //right
    if (state.x < 2 && state.previousMove !== 'left') {
      var newState = AIM.clone(state);
      newState.grid[newState.y][newState.x] = newState.grid[newState.y][++newState.x]
      newState.grid[newState.y][newState.x] = 0
      newState.previousMove = 'right'
      successors.push(newState)
    }
    //up
    if (state.y > 0 && state.previousMove !== 'down') {
      var newState = AIM.clone(state);
      newState.grid[newState.y][newState.x] = newState.grid[--newState.y][newState.x]
      newState.grid[newState.y][newState.x] = 0
      newState.previousMove = 'up'
      successors.push(newState)
    }
    //down
    if (state.y < 2 && state.previousMove !== 'up') {
      var newState = AIM.clone(state);
      newState.grid[newState.y][newState.x] = newState.grid[++newState.y][newState.x]
      newState.grid[newState.y][newState.x] = 0
      newState.previousMove = 'down'
      successors.push(newState)
    }
    return successors
  },
  //A function that return if 2 states are equals (Required in this case because state.previousMove doesn't matter)
  equals: function (state1, state2) {
    return AIM.equals(state1.grid, state2.grid)
  },
  //A function that return an heuristic for a specified state (Required only for A*)
  heuristic: function (state) {
    var h = 0
    for (var i = 0; i < state.grid.length; i++) {
      for (var j = 0; j < state.grid[i].length; j++) {
        var val = state.grid[i][j]
        var found = false
        for (var i2 = 0; i2 < finalState.grid.length; i2++) {
          for (var j2 = 0; j2 < finalState.grid[i2].length; j2++) {
            if (val === finalState.grid[i2][j2]) {
              h += Math.abs(i - i2) + Math.abs(j - j2)
              found = true
              break
            }
          }
          if (found) break
        }
      }
    }
    return h
  },
  //A function that return a HTML representation for a specified state (Required for beautiful results and Tree)
  toHTML: function (state) {
    var html = "<div class='grid'>"
    for (var j in state.struct.grid) {
      for (var i in state.struct.grid[j]) {
        html += "<div class='tile"
        html += state.struct.grid[j][i] === 0
          ? " empty'>"
          : "'>" + state.struct.grid[j][i]
        html += '</div>'
      }
    }
    html += '</div>'
    return html
  }
})

function eightPuzzleExecute () {
  var result = eightPuzzleAI.execute('A*')
  result.print(true)
  $('#8-puzzle-result').html(result.html())
  result.drawTree('#8-puzzle-tree')
}

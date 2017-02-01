/*
That AI is an example of use of AIMjs
Rules :
  There are 7 glass, some are upside down, some not. You have to reverse two adjacent glass. Every glasses have to be in the right side to win.
State :
  An array with a bit for each glass (0 = upside down, 1 = right side).
*/

//var AIM = require('./AIM.client.js')

var glassReverseAI = AIM.AI({
  initState: [0, 1, 0, 0, 1, 0, 1],
  finalState: [1, 1, 1, 1, 1, 1, 1],
  getSuccessors: function (state) {
    var successors = []

    for(var i = 0; i < state.length - 1; i++){
      var newState = AIM.clone(state);

      newState[i] = (newState[i] + 1) % 2
      newState[i + 1] = (newState[i + 1] + 1) % 2
      successors.push(newState)
    }

    return successors
  },
  toHTML: function (state) {
    var html = ''
    for (var i in state.struct) {
      if (state.struct[i] === 1) {
        html += '⋃'
      } else {
        html += '⋂'
      }
    }
    return html
  }
})

function glassReverseExecute () {
  var result = glassReverseAI.execute('breadth-first')
  result.print(true)
  $('#glass-reverse-result').html(result.html())
  result.drawTree('#glass-reverse-tree')
}

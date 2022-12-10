var arrayLength = 30
var newArray = []

for(var i = 0; i < arrayLength; i++) {
  var y = Math.round(Math.random()*10) + 1
  newArray[i] = y
}

Plotly.plot('graph', [{
  y: newArray,
  mode: 'lines',
  line: {color: '#80CAF6'}
}]);

var cnt = 0;

var interval = setInterval(function() {

  var y = Math.round(Math.random()*10) + 1
  newArray = newArray.concat(y)
  newArray.splice(0, 1)

  var data_update = {
    y: [newArray]
  };

  Plotly.update('graph', data_update)

  if(cnt === 100) clearInterval(interval);
}, 100);

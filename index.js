var Color = require("color")

var average = function(arr) {
  var sum = arr.reduce(function(prev, current) {
    return prev + current
  });
  return sum / arr.length
}

module.exports = function(colors){
  var clrs = [[],[],[]]
  var cs = colors.map(function(clr){
    var rgb = Color(clr).rgbArray()
    rgb.forEach(function(v, i){
      clrs[i].push(v)
    })
  })
  return Color().rgb(
    average(clrs[0]), // r
    average(clrs[1]), // g
    average(clrs[2])  // b
  ).hexString()
}

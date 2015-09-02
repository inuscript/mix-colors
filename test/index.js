var mixColors = require("../index")
var assert = require("assert")
describe("mix-clors", function(){
  it("white * black = gray", function(){
    var result = mixColors(["#000000", "#ffffff"])
    assert.equal(result, "#808080")
  })
  it("mix 3 color", function(){
    var result = mixColors( [ '#ff0000',
      '#00ff00',
      '#0000ff' ])
    assert.equal(result, "#555555")
  })
  it("mix named color", function(){
    var result = mixColors( [ 'red', 'blue'])
    assert.equal(result, "#800080")
  })
  it("mix named and hex", function(){
    var result = mixColors( [ 'red', '#00ff00'])
    assert.equal(result, "#808000")
  })
  it("mix rainbow", function(){
    var result = mixColors( [ '#ff0000',
      '#ffa500',
      '#ffff00',
      '#008000',
      '#0000ff',
      '#4b0082',
      '#ee82ee' ])
    assert.equal(result, "#9A6159")
  })
})
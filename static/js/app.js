var color = $('.selected').css('background-color')
var $canvas = $('canvas')
var ctx = $canvas[0].getContext('2d')
var lastEvent
var mouseDown = false

$('.controls').on('click', 'li', function () {
  $(this).siblings().removeClass('selected')
  $(this).addClass('selected')
  color = $(this).css('background-color')
})

$('#revealColorSelect').click(function () {
  changeColor()
  $('#colorSelect').toggle()
})

function changeColor () {
  var r = $('#red').val()
  var g = $('#green').val()
  var b = $('#blue').val()
  $('#newColor').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')
}

$('input[type=range]').change(changeColor)

$('#addNewColor').click(function () {
  var $newColor = $('<li></li>')
  $newColor.css('background-color', $('#newColor').css('background-color'))
  $('.controls ul').append($newColor)
  $newColor.click()
})

$canvas.mousedown(function (e) {
  lastEvent = e
  mouseDown = true
}).mousemove(function (e) {
  if (mouseDown) {
    ctx.beginPath()
    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.strokeStyle = color
    ctx.stroke()
    lastEvent = e
  }
}).mouseup(function () {
  mouseDown = false
})


/*

JS code

var color = document.querySelector('.selected').style.backgroundColor
var lis = document.querySelectorAll('li')
var revealColorSelect = document.querySelector('#revealColorSelect')

var canvas = document.querySelector('canvas')
// selecting first canvas html element
var ctx = canvas.getContext('2d')
var lastEvent
var mouseDown = false

function setSelected (selector) {
  selector.forEach(function (item) {
    item.addEventListener('click', function (event) {
      for (var i = 0; i < lis.length; i += 1) {
        lis[i].classList.remove('selected')
      }
      event.target.className += ' selected'
      color = event.target.style.backgroundColor
    })
  })
}

setSelected(lis)

revealColorSelect.addEventListener('click', function () {
  changeColor()
  var toggle = document.querySelector('#colorSelect')
  toggle.style.display === 'none' ? toggle.style.display = 'block' : toggle.style.display = 'none'
})

function changeColor () {
  var r = document.querySelector('#red').value
  var g = document.querySelector('#green').value
  var b = document.querySelector('#blue').value
  document.querySelector('#newColor').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}

document.querySelectorAll('input[type=range]').forEach(function (item) {
  item.addEventListener('change', changeColor)
})

document.querySelector('#addNewColor').addEventListener('click', function () {
  var newColor = document.createElement('li')
  newColor.style.backgroundColor = document.querySelector('#newColor').style.backgroundColor
  document.querySelector('.controls ul').appendChild(newColor)
  lis = document.querySelectorAll('li')
  setSelected(lis)
})

canvas.addEventListener('mousedown', function (e) {
  console.log(e)
  lastEvent = e
  mouseDown = true
})

canvas.addEventListener('mousemove', function (e) {
  if (mouseDown) {
    ctx.beginPath()
    ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.strokeStyle = color
    ctx.stroke()
    lastEvent = e
  }
})

canvas.addEventListener('mouseup', function () {
  mouseDown = false
})

*/

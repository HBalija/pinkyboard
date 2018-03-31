
var color = document.querySelector('.selected').style.backgroundColor
var controls = document.querySelectorAll('.controls li')
var revealColorSelect = document.querySelector('#revealColorSelect')

controls.forEach(function (item) {
  item.addEventListener('click', function (event) {
    for (var i = 0; i < controls.length; i += 1) {
      controls[i].classList.remove('selected')
    }
    event.target.className += ' selected'
    color = event.target.style.backgroundColor
  })
})

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


/*

jQuery code

var color = $('.selected').css('background-color')

$('.controls li').click(function () {
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

*/


var color = document.querySelector('.selected').style.backgroundColor
var controls = document.querySelectorAll('.controls li')

controls.forEach(function (item) {
  item.addEventListener('click', function (event) {
    for (var i = 0; i < controls.length; i += 1) {
      // for every list item remove class selected on click
      controls[i].classList.remove('selected')
    }
    // add class selected to clicked list item
    event.target.className += ' selected'
    color = event.target.style.backgroundColor
  })
})

// var color = $('.selected').css('background-color')

// $('.controls li').click(function () {
//   $(this).siblings().removeClass('selected')
//   $(this).addClass('selected')
//   color = $(this).css('background-color')
// })

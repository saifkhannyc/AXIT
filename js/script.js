$(document).ready(function () {
  $('.tab-content-2').hide()
  $('.tab-content-3').hide()

  // if click on tab-1

  $('.item-1').on('click', function () {
    $('.tab-content-1').show()
    $('.tab-content-3').hide()
    $('.tab-content-2').hide()

    $('.item-1').addClass('active')
    $('.item-2').removeClass('active')
    $('.item-3').removeClass('active')
  })

  // if click on tab-2

  $('.item-2').on('click', function () {
    $('.tab-content-1').hide()
    $('.tab-content-2').show()
    $('.tab-content-3').hide()

    $('.item-1').removeClass('active')
    $('.item-2').addClass('active')
    $('.item-3').removeClass('active')
  })

  // if click on tab-3

  $('.item-3').on('click', function () {
    $('.tab-content-1').hide()
    $('.tab-content-2').hide()
    $('.tab-content-3').show()

    $('.item-1').removeClass('active')
    $('.item-2').removeClass('active')
    $('.item-3').addClass('active')
  })
})

window.addEventListener('scroll', function () {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

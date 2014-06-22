$ ->   
  $('.show-menu-button').click ->
    $('.sidebar').toggleClass('active')

  sideslider = $('[data-toggle=collapse-side]')
  sel = sideslider.attr('data-target')
  sel2 = sideslider.attr('data-target-2')
  sideslider.click ->
    $(sel).toggleClass('in')
    $(sel2).toggleClass('out')
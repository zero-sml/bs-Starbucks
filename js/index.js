$('#showBtn').on('click', function () {
  $('.menu').removeClass('hide').addClass('show')
  shadowMenu()
})
$('#hideBtn').on('click', function () {
  $('.menu').removeClass('show').addClass('hide')
  shadowMenu()
})
$(window).resize(shadowMenu);

//当菜单弹出的时候，不要让body出现滚动条。当菜单消失的时候再让body出现滚动条
function shadowMenu() {
  //只有当屏幕尺寸小于992，以及menu菜单是显示的状态，这时才要干掉body的滚动条
  if ($(window).innerWidth() <= 992 && $('.menu').hasClass('show')) {
    //console.log(1);
    $('body').css('overflow', 'hidden');
  } else {
    $('body').css('overflow', 'auto');
  }
}
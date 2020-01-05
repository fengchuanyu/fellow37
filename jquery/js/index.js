$.fn.extend({
  fellow: function () {
    $(this).append(
      '<button id="btn">登录</button>' +
      '<div class="modal-bar">' +
      '<div class="login-bar">' +
      '<div class="lb-header">' +
      '登录' +
      '<span class="close">X</span>' +
      '</div>' +
      '<div class="lb-content">' +
      '登录' +
      '</div>' +
      '</div>' +
      '</div>'
    )
    $("#btn").on("click", function () {
      $(".modal-bar").addClass("active");
    })
    $(".close").on("click", function () {
      $(".modal-bar").removeClass("active");
    })
  }
})
$.fn.extend({
  fellow37: function () {
    var str = '<button id="btn">登录</button>' +
      '<div class="container">' +
      '<div class="login">' +
      '<div class="title">' +
      '<span>登录</span>' +
      '<span id="close-btn">X</span>' +
      '</div>' +
      '<div class="content">' +
      '登录内容' +
      '</div></div></div>';
    this.html(str);
    $("#btn").on("click", function () {
      $(".container").addClass("active");
    })
    $("#close-btn").on("click", function () {
      $(".container").removeClass("active");
    })
  }
})
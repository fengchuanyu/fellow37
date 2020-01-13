function ajaxGet(url,fun) {
  //第一步创建XMLHttpRequest
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //第二步发送请求
  xmlhttp.open("GET",url, true);
  xmlhttp.send();
  //第三部服务器 响应
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var res = JSON.parse(xmlhttp.responseText)
      fun(res)
    }
  }
}
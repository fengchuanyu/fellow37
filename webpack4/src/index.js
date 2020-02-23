import css from "./css/main.css"
import scss from "./style/test.scss"
import info from "./info.json"

window.onload = function(){
  let str = "hello world!";
  let oDiv1 = document.getElementById("div1");
  console.log(oDiv1)
  let num = 100;
  console.log(num);
  oDiv1.innerText = str;
  let foo = (a,b) =>a+b;
  console.log(info);
  $("#div3").text(`姓名:${info.name}学校:${info.school}年龄:${info.age}`)
}

import Mock from 'mockjs'

Mock.mock("https://www.baidu.com/getuser",{
  "dataList|10":[{
    "userName":"小明",
    "string|1-10": "hello",
    "num":'@integer(60, 100)',
    "date":'@date("yyyy-MM-dd")',
    "dis":'@cparagraph',
    "eName":"@first @last",
    "cName":'@cname',
    "address":'@county(true)'
  }]
})

let Random = Mock.Random;
const randomList = () => {
  let arr = [];
  let obj = {};
  for(let i=0;i<10;i++){
    obj={
      userName:Random.cname(),
      date:Random.date('yyyy-MM-dd'),
      info:Random.cparagraph(),
      address:Random.county(true),
      img:Random.dataImage('100x100',Random.integer(60,100))
    }
    arr.push(obj);
  }
  return arr
}
Mock.mock("https://www.taobao.com/getuser",{
  "dataList":randomList()
})
import React, { Component } from 'react'
import axios from 'axios'

export default class Page2 extends Component {
  constructor(props){
    super(props)
    this.state={
      dateList:[]
    }
  }
  componentDidMount(){
    // let url1 = "https://www.baidu.com/getuser"
    let url2= "https://www.taobao.com/getuser"
    axios.get(url2).then((res)=>{
      console.log(res)
      this.setState({
        dateList:res.data.dataList
      })
    })
  }
  render() {
    console.log(this.state.dateList)
    let listItem = this.state.dateList.map((val)=>{
      return(
        <li key={val.date}>
          <p>{val.userName}</p>
          <p>{val.date}</p>
          <img src={val.img} alt=""/>
        </li>
      )
    })
    return (
      <div>
        <h1>页面二</h1>
        <h1>{this.props.match.params.username}</h1>
        <ul>
          {listItem}
        </ul>
      </div>
    )
  }
}

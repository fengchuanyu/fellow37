import { combineReducers } from 'redux'

const count = (state=0,action) => {
  console.log(state,action)
  switch(action.type){
    case 'ADD':
      return state + action.step;
    default :
      return 0
  }
}

const reducer = combineReducers({
  count
})

export default reducer
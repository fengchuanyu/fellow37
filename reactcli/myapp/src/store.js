import {createStore} from 'redux'
import reduce from './reduce'

const initailState = {
  count:0
}

const store = createStore(reduce,initailState)

export default store
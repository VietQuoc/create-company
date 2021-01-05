import { combineReducers } from 'redux'
import appReducer from './app'

// Root reducer
export default combineReducers({
  app: appReducer,
})

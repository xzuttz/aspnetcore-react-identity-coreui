import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import sideBarReducer from './SideBarReducer'

export default combineReducers({
  auth: authReducer,
  side: sideBarReducer,
})

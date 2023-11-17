import { ActionTypes } from '../actions/Constants'
const initialState = {
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER: {
      return Object.assign({}, state, action.payload)
    }
    default:
      return state
  }
}

export default authReducer

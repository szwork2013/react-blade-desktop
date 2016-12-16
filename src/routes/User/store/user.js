import {BZ_REQUESTER} from 'UTIL/requesterMiddleware'

// Actions =============================================================

export function setuid (value) {
  return {
    type    : 'SET_UID',
    payload : value
  }
}

export function setname (value) {
  return {
    type    : 'SET_NAME',
    payload : value
  }
}

export const getuidAsync = (cb) => {
  return (dispatch, getState) => {
    dispatch(getuidAction(cb)).then(action => {
        dispatch(setuid(action.uid))
    })
  }
}

const getuidAction = (cb) => {
  return {
    [BZ_REQUESTER] : {
      url: 'http://amaze.qiniudn.com/user',
      callback: cb
    }
  }
}

// Reducer =============================================================

const initialState = {
  uid: '',
  mine: ''
}
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_UID' :
      return {
        ...state,
        uid: action.payload
      }
    case 'SET_NAME' :
      return {
        ...state,
        mine: action.payload
      }
    default:
      return state
  }
}

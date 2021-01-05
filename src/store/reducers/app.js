import { handleActions } from 'redux-actions'
import initState from '../initState'
import { reset, updateUser } from '../actions'

export default handleActions({
  [reset]: (state) => ({
    ...state,
    ...initState.app,
  }),
  [updateUser]: (state, { payload: { user } }) => ({
    ...state,
    user,
  }),
}, initState.app)

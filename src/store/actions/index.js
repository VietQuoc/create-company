import { createActions } from 'redux-actions'

const {
  reset,
  updateUser,
} = createActions({
  RESET: () => ({}),
  updateUser: (user) => ({ user }),
}, {
  prefix: 'app',
})

export {
  reset,
  updateUser,
}

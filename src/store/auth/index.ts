import { createStore } from 'effector'
import { tokenHardcoded, TOKEN_KEY } from '@/constants'
import { loginEvent } from './events/login'
import { logoutEvent } from './events/logout'
import { AuthState } from './interfaces'

export const $authStore = createStore<AuthState>({ username: '' })

$authStore.on(loginEvent, (_, username) => {
  localStorage.setItem(TOKEN_KEY, tokenHardcoded)
  return username
})

$authStore.on(logoutEvent, () => {
  localStorage.removeItem(TOKEN_KEY)
  return { username: '' }
})

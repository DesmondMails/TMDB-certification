import { createEvent } from 'effector'

export const loginEvent = createEvent<{ username: string }>()

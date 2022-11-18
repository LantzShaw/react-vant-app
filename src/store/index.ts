import { configureStore } from '@reduxjs/toolkit'

import userSlice from './features/userSlice'

// NOTE: redux-logger、@redux-devtools/core

export default configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
})

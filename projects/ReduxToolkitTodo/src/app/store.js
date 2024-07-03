// steps
// 1. configure store - core redux
import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({

    reducer: todoReducer
})
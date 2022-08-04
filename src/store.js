import { configureStore } from "@reduxjs/toolkit"

import { filterReducer } from "features/filters/filterSlice"
import { positionReducer } from "features/positions/positionSlice"


export const store = configureStore({
    reducer: {
        filters: filterReducer,
        positions: positionReducer
    },
    devTools: true
})
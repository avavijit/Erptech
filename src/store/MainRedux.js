import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllDataApi, getAllSingleDataApi, postCmdApi, postMethodApi } from '../utility/site-apis'
import { toast } from 'react-toastify';
import Config from "../common/Config";

const initialState = {
    isFetching: false,
    error: null,
    homeSetting: null,
    homeSlider:[],
}

const doctypeNewsHomePage = 'Home Page Setting'
const fieldsNewsHomePage = ["logo", "email", "phone", "address", "facebook", "twiter"]

const doctypePages = 'Web Page'
const doctypeHomeslider = 'Home slider'
const doctypeOurclint = 'Our Clients'


export const getHomeSettings = createAsyncThunk(
    'auth/getHomeSettings',
    async (params, { rejectWithValue }) => {
        const response = await getAllSingleDataApi({ doctype: doctypeNewsHomePage, fields: fieldsNewsHomePage, ...params })
        if (response.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response
    }
)

export const getPageDetails = createAsyncThunk(
    'auth/getPageDetails',
    async (params, { rejectWithValue }) => {
        const response = await getAllDataApi({ doctype: doctypePages, fields: ["*"], search: { route: params.name }, ...params })
        if (response.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data[0]
    }
)

export const getSlider = createAsyncThunk(
    'main/getSlider',
    async (params, { rejectWithValue }) => {
        const response = await getAllDataApi({ doctype: doctypeHomeslider, fields: ["*"], ...params })
        if (response.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const getOurclint = createAsyncThunk(
    'main/getOurclint',
    async (params, { rejectWithValue }) => {
        const response = await getAllDataApi({ doctype: doctypeOurclint, fields: ["*"], ...params })
        if (response.status === 'error') {
            return rejectWithValue(response.data)
        }
        return response.data
    }
)

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
    extraReducers: {
        // getHomeSettings
        [getHomeSettings.pending]: (state) => {
            state.isFetching = true
            state.error = null
        },
        [getHomeSettings.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action?.payload
        },
        [getHomeSettings.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.homeSetting = action?.payload
        },
        // getSlider
        [getSlider.pending]: (state) => {
            state.isFetching = true
            state.error = null
        },
        [getSlider.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action?.payload
        },
        [getSlider.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.homeSlider = action?.payload
        },
        // getOurclint
        [getOurclint.pending]: (state) => {
            state.isFetching = true
            state.error = null
        },
        [getOurclint.rejected]: (state, action) => {
            state.isFetching = false
            state.error = action?.payload
        },
        [getOurclint.fulfilled]: (state, action) => {
            state.isFetching = false
            state.error = null
            state.ourclint = action?.payload
        },

    }

})

export const { logout } = counterSlice.actions
export default counterSlice.reducer
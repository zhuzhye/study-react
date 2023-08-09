import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchHomeMultidataAction = createAsyncThunk('fetch/homeMultidata', async (extraInfo, { dispatch, getState }) => {
    // 发送网路请求获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")
    //获取数据，并且在此处直接dispatch操作（可以不做）
    const banners = res.data.data.banner.list
    const recommands = res.data.data.recommend.list
    dispatch(changeBanners(banners))
    dispatch(changeRecommands(recommands))
    // 返回结果，那么action状态会变成fulfilled
    return res.data
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        banners: [],
        recommands: []
    },
    reducers: {
        changeBanners(state, { type, payload }) {
            console.log(type, 'type')
            state.banners = payload
        },
        changeRecommands(state, { payload }) {
            state.recommands = payload
        },
    },
    // extraReducers: {
    // [fetchHomeMultidataAction.pending](state, action) { },
    // [fetchHomeMultidataAction.fulfilled](state, action) {
    //     console.log('fulfilled', state, action)
    //     state.banners = action.payload.data.banner.list
    //     state.recommands = action.payload.data.recommend.list
    // },
    // [fetchHomeMultidataAction.rejected](state, action) { },
    // }
    extraReducers: (builder) => {
        // builder.addCase(fetchHomeMultidataAction.pending, (state, action) => { })
        //     .addCase(fetchHomeMultidataAction.fulfilled, (state, action) => {
        //         state.banners = action.payload.data.banner.list
        //         state.recommands = action.payload.data.recommend.list
        //     })

    }
})
export const { changeBanners, changeRecommands } = homeSlice.actions
export default homeSlice.reducer
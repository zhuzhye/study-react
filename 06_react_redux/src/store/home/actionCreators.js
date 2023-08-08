import axios from 'axios'
import * as actionTypes from './constants'
export const changeBannerAction = (banner) => ({
    type: actionTypes.CHANGE_BANNER,
    banner
})

export const changeRecommandAction = (recommand) => ({
    type: actionTypes.CHANGE_RECOMMAND,
    recommand
})

export const fetchHomeMultidataAction = () => {
    // 如果是一个普通的aciton 那么我们需要返回action对象
    // 问题：对象中是不能直接拿到服务器请求的异步数据
    // return {}
    function foo(dispatch, getState) {
        console.log('first')
        axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
            const banner = res.data.data.banner.list;
            const recomend = res.data.data.recommend.list;
            console.log(banner, recomend);
            dispatch(changeBannerAction(banner));
            dispatch(changeRecommandAction(recomend));
        });
        console.log("foo-function-exection")
        // 异步操作：发送网络请求
    }
    // 如果返回一个函数那么redux不支持
    return foo
}
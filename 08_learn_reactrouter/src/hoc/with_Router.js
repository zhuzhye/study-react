import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
function withRouter(WrapperComponent) {
    return function (props) {
        // 1.导航
        const navigate = useNavigate();
        // 2.动态路由的参数：/detail/:id
        const params = useParams()
        // 3.查询字符串的参数：/user?name=jack
        const location = useLocation()
        const [searchPrams] = useSearchParams()
        const query = Object.fromEntries(searchPrams)
        return <WrapperComponent {...props} router={{ navigate, params, location, query }} ></WrapperComponent>;
    };
}

export default withRouter;
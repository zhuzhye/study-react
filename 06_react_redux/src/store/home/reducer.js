import * as actionTypes from './constants'
const initialState = {
    banner: [],
    recommand: []
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return { ...state, banner: action.banner }
        case actionTypes.CHANGE_RECOMMAND:
            return { ...state, recommand: action.recommand }
        default:
            return state
    }

}

export default reducer
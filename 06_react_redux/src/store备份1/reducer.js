import * as actionTypes from './constants'
const initialState = {
    counter: 100,
    banner: [],
    recommand: []
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case actionTypes.SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case actionTypes.CHANGE_BANNER:
            return { ...state, banner: action.banner }
        case actionTypes.CHANGE_RECOMMAND:
            return { ...state, recommand: action.recommand }
        default:
            return state
    }

}

export default reducer
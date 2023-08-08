import * as actionTypes from './constants'
export const addNumberAction = (num) => ({
    type: actionTypes.ADD_NUMBER,
    num
})
export const sunNumberAction = (num) => ({
    type: actionTypes.SUB_NUMBER,
    num
})
const { CHANGE_NAME, CHANGE_AGE } = require("./constants")
const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    name
  }
}

const addAgeAction = (age) => {
  return {
    type: CHANGE_AGE,
    age
  }
}

module.exports = {
  changeNameAction,
  addAgeAction
}
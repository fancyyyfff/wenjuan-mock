const quetion = require('./quetion')
const test = require('./test')
const user = require('./user')
const state = require('./stat')
const answer = require('./answer')
const mockList = [
    ...quetion,
    ...test,
    ...user,
    ...state,
    ...answer,
]

module.exports = mockList
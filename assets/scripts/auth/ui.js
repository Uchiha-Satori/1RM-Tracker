'use strict'
const app = require('./app.js')
const oneRepMaxHandlebarsTemplate = require('../templates/one-rep-max-template.handlebars')

const message = function (msg) {
  $('#error-message').text(msg)
}

const fadeMessage = function (msg) {
  $('#error-message').fadeIn(1000).delay(3000).fadeOut(1000)
}

const signUpSuccess = (data) => {
  message('Sign up success')
  fadeMessage()
}

const signUpFailure = () => {
  message('Sign Up Failure Username taken or incorrect matching password')
  fadeMessage()
}

const signInSuccess = (data) => {
  app.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#log-out').show()
  $('#record-history').show()
}

const signInFailure = () => {
  message('Incorrect Password or Username')
  fadeMessage()
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  fadeMessage()
}

const changePasswordFailure = () => {
  message('Error, Try Again, Password Not Changed')
  fadeMessage()
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  fadeMessage()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#stat-table').hide()
  $('#log-out').hide()
  $('#record-history').hide()
  $('#new-record').hide()
}

const logoutFailure = () => {
  message('Log Out Fail')
  fadeMessage()
}

const getRecordsFail = () => {
}

const getRecordSuccess = function (data) {
  $('#new-record').show()
  $('#stat-table').show()

  $('#stat-table').empty()

  const context = {
    'records': data.records
  }
  const oneRepMaxTemplate = oneRepMaxHandlebarsTemplate(context)
  $('#stat-table').append(oneRepMaxTemplate)
}

const updateRecordSuccess = function (data) {
}

const updateRecordFail = () => {
}

const deleteRecordSuccess = function (data) {
  message('Record Deleted, please press Record History')
  fadeMessage()
}

const deleteRecordFail = () => {
}

const newRecordSuccess = function (data) {
  message('Record created, please click Record History')
  fadeMessage()
}

const newRecordFail = () => {
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  logoutSuccess,
  logoutFailure,
  updateRecordSuccess,
  updateRecordFail,
  deleteRecordSuccess,
  deleteRecordFail,
  getRecordSuccess,
  getRecordsFail,
  newRecordSuccess,
  newRecordFail
}

'use strict'
const app = require('./app.js')
const handlebarsData = require('../handlebars-data.js')
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
  console.log(data)
}

const signUpFailure = (error) => {
  message('Sign Up Failure Username taken or incorrect matching password')
  fadeMessage()
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
  app.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#log-out').show()
  $('#record-history').show()
  $('#new-record').show()
  $('#stat-table').show()
}

const signInFailure = (error) => {
  console.log(error)
  message('Incorrect Password or Username')
  fadeMessage()
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  fadeMessage()
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  fadeMessage()
  console.log(error)
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

  console.log('it log off')
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  fadeMessage()
  console.log(error)
}

const getRecordsFail = (error) => {
  console.log('Failed in getRecordsFail')
  console.error(error)
}

const getRecordSuccess = function (data) {
  console.log('ui data')
  console.log(data)

  $('#stat-table').empty()

  const context = {
    'records': data.records
  }
  const oneRepMaxTemplate = oneRepMaxHandlebarsTemplate(context)
  $('#stat-table').append(oneRepMaxTemplate)
}

const updateRecordSuccess = function (data) {
  console.log('updateRecordSuccess')
  console.log(data)
}

const updateRecordFail = (error) => {
  console.log('updateRecordFail')
  console.error(error)
}

const deleteRecordSuccess = function (data) {
  console.log('deleteRecordSuccess')
  console.log(data)
}

const deleteRecordFail = (error) => {
  console.log('deleteRecordFail')
  console.error(error)
}

const newRecordSuccess = function (data) {
  console.log('newRecordSuccess')
  console.log(data)
}

const newRecordFail = (error) => {
  console.log('newRecordFail')
  console.error(error)
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

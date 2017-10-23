const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('#error-message').fadeIn(1000).delay(3000).fadeOut(1000))
    .catch(ui.signUpFailure)
    .catch($('#error-message').fadeIn(1000).delay(3000).fadeOut(1000))
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()
  api.userLogout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

const onDeleteRecord = function (event) {
  const id = this.getAttribute('data-id')
  console.log(event)
  event.preventDefault()
  api.deleteRecord(id)
    .then(ui.deleteRecordSuccess)
    .catch(ui.deleteRecordFail)
}

const onRecordHistory = function (event) {
  event.preventDefault()
  api.recordHistory()
    .then(ui.getRecordSuccess)
    .catch(ui.getRecordsFail)
}

const onNewRecord = function (event) {
  event.preventDefault()
  api.newRecord()
    .then(ui.newRecordSuccess)
    .catch(ui.newRecordFail)
}

const onUpdateRecord = function (event) {
  event.preventDefault()
  const chest = $('.input-chest').val()
  const tricep = $('.input-tricep').val()
  const bicep = $('.input-bicep').val()
  const deadlift = $('.input-deadlift').val()
  const squat = $('.input-squat').val()
  const personalNotes = $('.input-personal_notes').val()
  const recordId = $('#edit-modal').data('id')
  api.updateRecord(chest, tricep, bicep, deadlift, squat, personalNotes, recordId)
    .then(ui.updateRecordSuccess)
    .catch(ui.updateRecordFail)
}

const onEditButtonClick = function (event) {
  event.preventDefault()
  let chest = $(this).data('chest')
  let bicep = $(this).data('bicep')
  let tricep = $(this).data('tricep')
  let deadlift = $(this).data('deadlift')
  let squat = $(this).data('squat')
  let personal_notes = $(this).data('personalNotes')
  let id = $(this).data('id')
  $('.input-chest').val($(this).data('chest'))
  $('.input-bicep').val(bicep)
  $('.input-tricep').val(tricep)
  $('.input-deadlift').val(deadlift)
  $('.input-squat').val(squat)
  $('.input-personal_notes').val(personal_notes)
  $('#edit-modal').attr('data-id', id)
  console.log($(this).data('personalNotes'))
}
module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  onUpdateRecord,
  onDeleteRecord,
  onRecordHistory,
  onNewRecord,
  onEditButtonClick
}

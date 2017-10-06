const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
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
//
// const onSubmitRecord = function (event) {
//   event.preventDefault()
//   api.adminRecord(chest, tricep, bicep, deadlift, squat, personal_notes) // update api
//     .then(ui.createSuccess) // update ui with
//     .catch(ui.loopRecordsFailure)
// }

const onUpdateRecord = function (recordId, data) {
  api.updateRecord(recordId, data)
  console.log(event.target.dataset.id)
  event.preventDefault()
  console.log($('.input-this').val())
  // const chest
  // const tricep
  // const bicep
  // const deadlift
  // const squat
  // const personal_notes
  api.updateRecord(data)
    .then(ui.updateRecordSuccess)
    .catch(ui.updateRecordFail)
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
    .then()
    .catch()
}
module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  // onSubmitRecord,
  onUpdateRecord,
  onDeleteRecord,
  onRecordHistory,
  onNewRecord
}

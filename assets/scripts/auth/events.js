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
// adjust for modal later
const onSubmitRecord = function (event) {
  event.preventDefault()
  const title = $('#00').val()
  const content = $('#11').val()
  api.adminRecord(title, content) // update api
    .then(ui.createSuccess) // update ui with
    .catch(ui.loopRecordsFailure)
}

const onRecordEdit = function (event) {
  console.log(event.target.dataset.id)
  event.preventDefault()
  const eventNum = event.target.dataset.id
  const blogId = parseInt(eventNum)
  const title = $('#blog-title').val()
  const content = $('#content-text').val()
  api.updateBlog(blogId, title, content)
    .then(ui.editRecordSuccess)
    .catch(ui.editRecordFail)
}

const onRecordDelete = function (event) {
  console.log(event)
  event.preventDefault()
  api.deleteRecord(event.target.dataset.id)
    .then(ui.deleteRecordSuccess)
    .catch(ui.deleteRecordFail)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onLogOut,
  onSubmitRecord,
  onRecordEdit,
  onRecordDelete
}

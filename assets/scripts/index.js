'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const ui = require('./auth/ui.js') // may not need

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const recordEvents = require('../scripts/auth/events.js')

$(() => {
  $('#log-out').hide()
  $('#record-history').hide()
  $('#new-record').hide()
  $('#sign-up').on('submit', recordEvents.onSignUp)
  $('#sign-in').on('submit', recordEvents.onSignIn)
  $('#change-password').on('submit', recordEvents.onChangePassword)
  $('#log-out').on('click', recordEvents.onLogOut)
  $('#record-history').click(recordEvents.onRecordHistory)
  // $('#submit-record').on('click', recordEvents.onSubmitRecord)
  $('#new-record').on('click', recordEvents.onNewRecord)
})
$(document).on('click', '.delete-record', recordEvents.onDeleteRecord)
$(document).on('click', '.update-record', recordEvents.onUpdateRecord)
// $(document).on('submit', '#form-form', recordEvents.onEditRecord)

// // maybe use this later for modal
// // update button
// $(document).on('click', '.btnDeleteRecord', recordEvents.onBlogDelete)
// // edit button
// $(document).on('click', '#recordUpdateButton', recordEvents.onBlogEdit)
//
// $(document).on('show.bs.modal', (e) => {
//   let recordId = e.relatedTarget.dataset.id
//   console.log(recordId)
//   $('.btnUpdateRecord').attr('data-id', `${recordId}`)
// })

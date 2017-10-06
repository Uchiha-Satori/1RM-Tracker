'use strict'
const app = require('./app.js')

const signUp = (data) => {
  return $.ajax({
    url: app.host + 'sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + 'sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: app.host + 'change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const userLogout = () => {
  return $.ajax({
    url: app.host + 'sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const updateRecord = (id, chest, tricep, bicep, deadlift, squat, personal_notes) => {
  return $.ajax({
    url: app.host + 'records/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'record': {
        'chest': chest,
        'tricep': tricep,
        'bicep': bicep,
        'deadlift': deadlift,
        'squat': squat,
        'personal_notes': personal_notes,
        'user_id': app.user.id
      }
    }
  })
}

const deleteRecord = (id) => {
  console.log(id)
  return $.ajax({
    url: app.host + 'records/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const recordHistory = () => {
  return $.ajax({
    url: app.host + 'records/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// create new record
const newRecord = (chest, tricep, bicep, deadlift, squat, personal_notes) => {
  return $.ajax({
    url: app.host + 'records/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
      'record': {
        'chest': chest,
        'tricep': tricep,
        'bicep': bicep,
        'deadlift': deadlift,
        'squat': squat,
        'personal_notes': personal_notes,
        'user_id': app.user.id
      }
    }
  })
}

// make button, and everything else just like admin blog.
module.exports = {
  signIn,
  signUp,
  changePassword,
  userLogout,
  newRecord,
  updateRecord,
  deleteRecord,
  recordHistory
}

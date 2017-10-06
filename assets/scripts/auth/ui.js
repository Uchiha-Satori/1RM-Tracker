'use strict'
const app = require('./app.js')
const handlebarsData = require('../handlebars-data.js')
const oneRepMaxHandlebarsTemplate = require('../templates/one-rep-max-template.handlebars')

const message = function (msg) {
  $('#error-message').text(msg)
}

const signUpSuccess = (data) => {
  message('Sign up success')
  console.log(data)
}

const signUpFailure = (error) => {
  message('Sign Up Failure Username taken or incorrect matching password')
  console.log(error)
}

const signInSuccess = (data) => {
  console.log(data)
  app.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
}

const signInFailure = (error) => {
  console.log(error)
  message('Incorrect Password or Username')
}

const changePasswordSuccess = (data) => {
  message('Password Changed')
  console.log(data)
}

const changePasswordFailure = (error) => {
  message('Error, Try Again, Password Not Changed')
  console.log(error)
}

const logoutSuccess = () => {
  app.user = null
  message('Log Out Success')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  console.log('it log off')
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  console.log(error)
}

const getRecordsFail = (error) => {
  console.error(error)
}

const getRecordSuccess = function (data) {
  console.log('ui data')
  console.log(data)
  // return handlebarsData.oneRepMaxHandlebars()

  // const records = data.records
  $('#stat-table').empty()

  // const records = data.records.map(record => {
    // delete record.id
    // return record
  // })

  const context = {
    'records': data.records
  }

  // console.log(context)
  const oneRepMaxTemplate = oneRepMaxHandlebarsTemplate(context)
  $('#stat-table').append(oneRepMaxTemplate)

  // let dataID
  // for (let i = 0; i < data.records.length; i++) {
  //  dataID = data.records[i].id
  //  handlebarsData.oneRepMaxHandlebars(data, dataID)
  // }
}
// code was from former history see if i still need it later
// const loopBlogsSuccess = function (data) {
//   console.log(data)
//   const blogs = data.blogs
//   $('#show-blogs').empty()
//   blogs.forEach((blog) => {
//
//     $('#show-blogs').append(
//       '<div>' +
//       `<h1> ${blog.title} </h1>` +
//       `<p> ${blog.content} </p>` +
//       `<input type="submit" class="btnDeleteBlog" name="delete" data-id="${blog.id}" value="delete blog">` +
//       // outside edit blog button
//       `<button type="button" class="btnEditBlog" id="editBtn${blog.id}" data-toggle="modal" data-target="#exampleModal" data-id="${blog.id}">edit blog</button>` +
//       '</div>'
//     )
//   })
// }
const editRecordSuccess = function (data) {
  console.log(data)
}

const editRecordFail = (error) => {
  console.error(error)
}

const deleteRecordSuccess = function (data) {
  console.log(data)
}

const deleteRecordFail = (error) => {
  console.error(error)
}

const newRecordSuccess = function (data) {
  console.log(data)
}

const newRecordFail = (error) => {
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
  editRecordSuccess,
  editRecordFail,
  deleteRecordSuccess,
  deleteRecordFail,
  getRecordSuccess,
  getRecordsFail,
  newRecordSuccess,
  newRecordFail
}

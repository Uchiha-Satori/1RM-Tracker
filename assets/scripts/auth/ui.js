'use strict'
const app = require('./app.js')
const message = function (msg) {
  $('#error-message').text(msg)
}

const signUpSuccess = (data) => {
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

  console.log('this is working')
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
  console.log('it log off')
}

const logoutFailure = (error) => {
  message('Log Out Fail')
  console.log(error)
}

const loopRecordsFail = (error) => {
  console.error(error)
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

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  logoutSuccess,
  logoutFailure,
  loopRecordsFail,
  editRecordSuccess,
  editRecordFail,
  deleteRecordSuccess,
  deleteRecordFail
}

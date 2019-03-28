'use strict'

const store = require('./store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
  $('#sign-up-form').trigger('reset')
}
const signInSuccess = (responseData) => {
  $('#user-message').text('successfully signed In!')
  store.userId = responseData.user.id
  store.user = responseData.user
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)

}
const signOutSuccess = (responseData) => {
  $('#user-message').text('successfully signed Out!')
  $('form').trigger('reset')
  store.user = null





  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)

}

const signOutFailure = () => {
  $('#user-message').text('error on sign out')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const signUpFailure = () => {
  $('#user-message').text('error on sign up')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').text('error on sign in')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-in-form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').text('error in changing password')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
}
const changePasswordSuccess = () => {
  $('#user-message').text('successfully changed password!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const failure = () => {

  $('#user-message').text('something went wrong')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)


  // $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess,
  failure

}

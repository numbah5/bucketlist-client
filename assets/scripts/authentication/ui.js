'use strict'

const store = require('../store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  // $('#inputEmailSignIn').on('click')
  $('#user-message').text('successfully signed up!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#authentication-page').hide()
  $('#bucket-list-page').show()
  $('#user-message').text('successfully signed In!')
  // store.userId = responseData.user._id
  store.user = responseData.user
  console.log('responseData:' + responseData)
  console.log('responseData.user:' + responseData.user)
  console.log('responseData.user.token:' + responseData.user.token)
  console.log('store:' + store)
  console.log('store.user:' + store.user)
  console.log('store:' + store)
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const changePasswordSuccess = (responseData) => {
  // need to create ID in HTML for this listener
  $('#user-message').text('successfully changed password!')
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

const signUpFailure = () => {
  $('#sign-up-button').text('error on sign up')
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
  $('#btn-change-password').trigger('reset')
}

const failure = () => {
  $('#user-message').text('something went wrong')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}

const signOutFailure = () => {
  $('#sign-out-button').on('submit', () => {
    $('#user-message').text('error on sign out')
    setTimeout(function () {
      $('#user-message').text('')
    }, 2000)
  })
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

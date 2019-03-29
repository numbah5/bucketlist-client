'use strict'

const store = require('./store.js')
// const app = require('../app.js')

const signUpSuccess = () => {
  $('#sign-up-button').on('submit', () => {
    $('#user-message').text('successfully signed up!')
    $('form').trigger('reset')
  })
}

const signInSuccess = (responseData) => {
  $('#sign-up-button').on('submit', () => {
    $('#user-message').text('successfully signed In!')
    store.userId = responseData.user.id
    store.user = responseData.user
    setTimeout(function () {
      $('#user-message').text('')
    }, 2000)
  })
}

const changePasswordSuccess = () => {
  // need to create ID in HTML for this listener
  $('#').text('successfully changed password!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const signOutSuccess = (responseData) => {
  $('#sign-out-button').on('submit', () => {
    $('#user-message').text('successfully signed Out!')
    $('form').trigger('reset')
    store.user = null
    setTimeout(function () {
      $('#user-message').text('')
    }, 2000)
  })
}

const signUpFailure = () => {
  $('#sign-up-button').text('error on sign up')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
}

const signInFailure = () => {
  $('#sign-in-button').text('error on sign in')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-in-form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#').text('error in changing password')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#sign-up-form').trigger('reset')
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

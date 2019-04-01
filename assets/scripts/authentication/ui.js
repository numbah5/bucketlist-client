'use strict'

const store = require('../store.js')
// const app = require('../app.js')

const hideOwnership = () => { $('.list-item').hide() }

const signUpSuccess = () => {
  // $('#inputEmailSignIn').on('click')
  $('#form-sign-up').trigger('reset')
  $('#user-message').text('successfully signed up!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#form-sign-in').trigger('reset')
  $('#authentication-page').hide()
  $('#bucket-list-page').show()
  $('#user-message').text('successfully signed In!')
  store.user = responseData.user
  console.log(store)
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const changePasswordSuccess = (responseData) => {
  $('form').trigger('reset')
  // need to create ID in HTML for this listener
  $('#user-message').text('successfully changed password!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const signOutSuccess = (responseData) => {
  $('#user-message').text('successfully signed Out!')
  $('.list-item').trigger('reset')
  store.user = null
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('get-list-items').html('')
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#authentication-page').show()
  hideOwnership()
}

const signUpFailure = () => {
  $('#user-message').text('error on sign up')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#form-sign-up').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').text('error on sign in')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#form-sign-in').trigger('reset')
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

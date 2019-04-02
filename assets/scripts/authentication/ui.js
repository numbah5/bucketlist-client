'use strict'

const store = require('../store.js')

const hideOwnership = () => { $('.list-item').hide() }

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#form-sign-up').trigger('reset')
  $('#sign-up-button').text('Sign Up Successful!')
  setTimeout(function () {
    $('#sign-up-button').text('Sign up')
  }, 2000)
}

const signInSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#form-sign-in').trigger('reset')
  $('#authentication-page').hide()
  $('#bucket-list-page').show()
  $('#user-message').text('Successfully Signed In!')
  store.user = responseData.user
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const changePasswordSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully Changed Password!')
  $('#changePasswordModal').modal('hide')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const signOutSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-message').text('Successfully Signed Out!')
  $('.list-item').trigger('reset')
  store.user = null
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#get-list-items').html('')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#authentication-page').show()
  hideOwnership()
}

const signUpFailure = () => {
  $('#sign-up-button').text('Sign Up Failed')
  setTimeout(function () {
    $('#sign-up-button').text('Sign Up')
  }, 1000)
  $('#form-sign-up').trigger('reset')
}

const signInFailure = () => {
  $('#sign-in-button').text('Sign in Failed')
  setTimeout(function () {
    $('#sign-in-button').text('Sign In')
  }, 1000)
  $('#form-sign-in').trigger('reset')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').text('Error In Changing Password')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('#btn-change-password').trigger('reset')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-message').text('Something Went Wrong')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const signOutFailure = () => {
  $('#sign-out-button').on('submit', () => {
    $('#user-message').text('Error On Sign Out')
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

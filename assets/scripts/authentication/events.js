'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#form').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  api.changePassword()
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#change-password-form').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('form').trigger('reset')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

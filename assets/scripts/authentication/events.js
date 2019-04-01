'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const events = require('../list-items/events')
// const store = require('../store.js')

const onSignUp = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(formData)
        .then(ui.signInSuccess)
    })
    .catch(ui.signUpFailure)
  // $('#inputEmailSignIn').trigger('reset')
}

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .then(events.onGetListItems)
    // .then(showOwnership())
    // hideOwnership() maybe in a prosime
    // showOwnership()
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#btn-change-password').trigger('reset')
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

'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.createAccount(formData)
    .then(ui.createAccountSuccess)
    .then(() => { onGetAccounts() })
    .catch(ui.createAccountFailure)
}

const onGetAccounts = function () {
  api.getAccounts()
    .then(ui.getAccountsSuccess)
    .catch(ui.getAccountsFailure)
}

const onDeleteAccount = function (event) {
  const accountId = $(event.target).data('id')
  $('#all' + accountId).hide()
  event.preventDefault()
  api.deleteAccount(accountId)
    .then(ui.deleteAccountSuccess)
    .catch(ui.deleteAccountFailure)
}

const onUpdateAccount = function (event) {
  event.preventDefault()

  const accountId = event.target.id

  const formData = getFormFields(event.target)
  $('#all' + accountId).hide()

  api.updateAccount(accountId, formData)
    .then(ui.updateAccountSuccess)
    .then(onGetAccounts)
    .catch(ui.updateAccountFailure)
}

// const onMarkAsComplete = (event) => {
//   event.preventDefault()
//   const currentItem = event.target.id
//   if ($(event.target).attr('src') === '1') {
//     $('#' + currentItem).css('text-decoration', 'line-through')
//     $('#a' + currentItem).css('text-decoration', 'line-through')
//     $(event.target).attr('src', '2')
//   } else {
//     $('#' + currentItem).css('text-decoration', 'none')
//     $('#a' + currentItem).css('text-decoration', 'none')
//     $(event.target).attr('src', '1')
//   }
// }
//
// const showUpdateForm = function (event) {
//   const accountId = $(event.target).data('id')
//   $('#' + accountId).toggle()
// }

const addHandlers = function () {
  $('#create-list-item-button').on('click', onCreateAccount)
}

module.exports = {
  addHandlers,
  onUpdateAccount,
  onDeleteAccount,
  onGetAccounts,
  onCreateAccount
  // onMarkAsComplete,
  // showUpdateForm
}

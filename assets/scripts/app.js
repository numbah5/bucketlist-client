const authEvents = require('./authentication/events.js')
const listItemsEvents = require('./list-items/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const hideOwnership = () => { $('.list-item').hide() }

$(() => {
  // authEvents.addHandlers()
  listItemsEvents.addHandlers()
  // $('.owned').hide()
  hideOwnership()
  $('#form-sign-up').on('submit', authEvents.onSignUp)
  $('#form-sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#go-to-sign-up-button').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
  })
  $('#go-to-sign-in-button').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
  })
  $('#btn-change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#form-create-list-items').on('submit', listItemsEvents.onCreateListItem)
  $('#get-list-items').on('click', '.delete-button', listItemsEvents.onDeleteListItem)
})

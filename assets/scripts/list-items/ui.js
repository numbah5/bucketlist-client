'use strict'

const store = require('../store.js')
const formatListItems = require('../templates/get-list-items.handlebars')

const showOwnership = () => {
  $(`.list-item[data-owner=${store.user._id}]`).show()
  $('.form-update').hide()
  for (let i = 0; i < store.listItems.length; i++) {
    if (store.listItems[i].boolean === true) {
      const target = store.listItems[i]._id
      $('#title' + target).css('text-decoration', 'line-through')
      $('#description' + target).css('text-decoration', 'line-through')
    }
  }
}

const createListItemSuccess = (responseData) => {
  $('#user-message').text('You have successfully added to your Bucket List!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const createListItemFailure = () => {
  $('#user-message').text('Failed to create Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const getListItemsSuccess = function (responseData) {
  store.listItems = responseData.listItems
  const formattedListItems = formatListItems({listItems: store.listItems})
  $('#get-list-items').html(formattedListItems)
  $('form').trigger('reset')
  showOwnership()
}

const getListItemsFailure = () => {
  $('#user-message').text('Failed to get Bucket list Items! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')
}

const updateListItemSuccess = function (responseData) {
  $('#user-message').html('You have successfully updated your Bucket List')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const updateListItemFailure = () => {
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  $('.list-item').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const deleteListItemSuccess = function () {
  $('#user-message').html('ENTRY DELETED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const deleteListItemFailure = () => {
  $('#user-message').text('Failed to delete Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

module.exports = {
  createListItemSuccess,
  getListItemsSuccess,
  updateListItemSuccess,
  deleteListItemSuccess,
  createListItemFailure,
  getListItemsFailure,
  updateListItemFailure,
  deleteListItemFailure
}

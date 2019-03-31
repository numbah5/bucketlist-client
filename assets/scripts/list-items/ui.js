'use strict'

const store = require('../store.js')
const formatListItems = require('../templates/get-list-items.handlebars')

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
  console.log(store.user._id)
  console.log(store.listItems.owner)
  const formattedListItems = formatListItems({listItems: store.listItems})
  $('#get-list-items').html(formattedListItems)
  $('form').trigger('reset')
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
  $('form').trigger('reset')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const updateListItemFailure = () => {
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  $('form').trigger('reset')
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

// $('.bucket-list-item').css('text-decoration', 'line-through')

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

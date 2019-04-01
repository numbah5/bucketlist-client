'use strict'

const store = require('../store.js')
const formatListItems = require('../templates/get-list-items.handlebars')

const showOwnership = () => {
  $(`.list-item[data-owner=${store.user._id}]`).show()
  // const bool = $(`.list-title[data-bool=${}]`)
  // console.log(bool)
  // for (let i = 0; i < bool.length; i++) {
  //   console.log(bool[i].dataset.bool)
  //   console.log(store)
  //   if (bool[i].dataset.bool === 'true') {
  //     $(`.list-title[data-owner=${store.user._id}]`).css('text-decoration', 'line-through')
  //     $(`.list-description[data-owner=${store.user._id}]`).css('text-decoration', 'line-through')
  //   } else {
  //     $(`.list-title[data-owner=${store.user._id}]`).css('text-decoration', 'none')
  //     $(`.list-description[data-owner=${store.user._id}]`).css('text-decoration', 'none')
  // }
  // }
}

// const hideOwnership = () => { $('.list-item').hide() }

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
  console.log(store)
  // console.log(store.listItems.owner)
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
  // console.log(responseData)
  // store.boolean = responseData.boolean
  // console.log(store.boolean)
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
  // console.log(store.event)
  // $('.list-item').data(store.deleteFormId).hide()
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

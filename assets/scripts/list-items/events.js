'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateListItem = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  console.log(formData)

  api.createListItem(formData)
    .then(ui.createListItemSuccess)
    .then(onGetListItems())
    .catch(ui.createListItemFailure)
  // $('#create-list-item-button').trigger('reset')
}

const onGetListItems = function () {
  console.log(store)
  // event.preventDefault()
  api.getListItems()
    .then(ui.getListItemsSuccess)
    .catch(ui.getListItemsFailure)
}

const onDeleteListItem = function (event) {
  const listItemId = $(event.target).data('id')
  const owner = $(event.target).data('owner')
  console.log(store.user._id)
  console.log(owner)
  event.preventDefault()
  api.deleteListItem(listItemId)
    .then(ui.deleteListItemSuccess) // this
    .catch(ui.deleteListItemFailure)
  // $('#<delete-item-form>').trigger('reset')
  // $('#<user-message>').trigger('reset')
}

const onUpdateListItem = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.updateItem(formData.listItem)
    .then(ui.updateListItemSuccess)
    .catch(ui.updateListItemFailure)
  $('#<update-item-form>').trigger('reset')
}

const addHandlers = function () {
  $('#create-list-item-button').on('click', onCreateListItem)
}

module.exports = {
  addHandlers,
  onUpdateListItem,
  onDeleteListItem,
  onGetListItems,
  onCreateListItem
}

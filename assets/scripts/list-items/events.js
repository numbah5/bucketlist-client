'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateListItem = (event) => {
  event.preventDefault()

  const form = (event.target)
  const formData = getFormFields(form)

  api.createListItems(formData)
    .then(ui.createListItemSuccess)
    .catch(ui.createListItemFailure)
  // $('#create-list-item-button').trigger('reset')
}

const onGetListItems = function () {
  event.preventDefault()

  api.getListItems()
    .then(ui.getListItemsSuccess)
    .catch(ui.getListItemsFailure)
}

const onDeleteListItem = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.deleteItem(formData.listItem.id, formData)
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

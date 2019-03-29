'use strict'
const getFormFields = require('../../lib/getFormFields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateListItems = (event) => {
  event.preventDefault()

  const form = (event.target)
  const formData = getFormFields(form)
  api.createItems(formData)
    .then(ui.createItemSuccess)
    .catch(ui.createItemFailure)
  $('#<create-form>').trigger('reset')
}

const onGetItems = function () {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.getItemsFailure)
}

const onDeleteItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleteItem(formData.item.id)
    .then(ui.deleteItemSuccess) // this
    .catch(ui.deleteItemFailure)
  $('#<delete-item-form>').trigger('reset')
  $('#<user-message>').trigger('reset')
}

const onUpdateItem = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.updateItem(formData.item)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
  $('#<update-item-form>').trigger('reset')
}

const addHandlers = function () {
  $('#account').on('submit', showAccountPage)
  $('#my-lists').on('submit', showMyListsPage)
  $('#create-errand').on('submit', onCreateErrand)
  $('#get-errands').on('submit', '.errand', onUpdateErrand)
  $('#get-errands').on('reset', '.errand', onDeleteErrand)
}

$('#create-list-item-button').on('click', onCreateListItem)

module.exports = {
  onUpdateItem,
  onDeleteItem,
  onGetItems,
  onCreateListItems

}

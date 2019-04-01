'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateListItem = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  api.createListItem(formData)
    .then(ui.createListItemSuccess)
    .then(onGetListItems())
    .catch(ui.createListItemFailure)
}

const onGetListItems = function () {
  api.getListItems()
    .then(ui.getListItemsSuccess)
    .catch(ui.getListItemsFailure)
}

const onDeleteListItem = function (event) {
  const listItemId = $(event.target).data('id')
  $('#all' + listItemId).hide()
  event.preventDefault()
  api.deleteListItem(listItemId)
    .then(ui.deleteListItemSuccess)
    .catch(ui.deleteListItemFailure)
}

const onUpdateListItem = function (event) {
  event.preventDefault()

  const listItemId = event.target.id

  const formData = getFormFields(event.target)
  $('#all' + listItemId).hide()

  api.updateListItem(listItemId, formData)
    .then(ui.updateListItemSuccess)
    .then(onGetListItems)
    .catch(ui.updateListItemFailure)
}

const onMarkAsComplete = (event) => {
  event.preventDefault()
  const currentItem = event.target.id
  if ($(event.target).attr('src') === '1') {
    $('#' + currentItem).css('text-decoration', 'line-through')
    $('#a' + currentItem).css('text-decoration', 'line-through')
    $(event.target).attr('src', '2')
  } else {
    $('#' + currentItem).css('text-decoration', 'none')
    $('#a' + currentItem).css('text-decoration', 'none')
    $(event.target).attr('src', '1')
  }
}

const showUpdateForm = function (event) {
  const listItemId = $(event.target).data('id')
  $('#' + listItemId).toggle()
}

const addHandlers = function () {
  $('#create-list-item-button').on('click', onCreateListItem)
}

module.exports = {
  addHandlers,
  onUpdateListItem,
  onDeleteListItem,
  onGetListItems,
  onCreateListItem,
  onMarkAsComplete,
  showUpdateForm
}

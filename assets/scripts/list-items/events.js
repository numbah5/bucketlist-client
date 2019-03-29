'use strict'

const onCreateItem = (event) => {
  event.preventDefault()
  const form = event.target

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

module.exports = {
  onUpdateItem,
  onDeleteItem,
  onGetItems,
  onCreateItem

}

('use strict')

const authEvents = require('./events.js')
const authApi = require('./api.js')
const authUi = require('./ui.js')
const config = require('../config.js')
const store = require('../store.js')

const onCreateItem = function (formData) {
  return $.ajax({
      url: config.apiUrl + '/list-items/',
      method: 'POST',
      headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
    })
}

const onGetItems = function () {
  return $.ajax({
    url: config.apiUrl + '/list-items/',
    method: 'GET',
    headers: {
    Authorization: 'Token token=' + store.user.token
    }
  })
}

const onGetItem = function (id) {
  return $.ajax({
      url: config.apiUrl + '/list-items/' + `${id}`,
      method: 'GET',
      headers: {
      Authorization: 'Token token=' + store.user.token
      }
    })
}

const onDeleteItem= function (id) {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + `${id}`,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + store.user.token
  }

  })
}

const onUpdateItem = function (formData) {
  return $.ajax({
      url: config.apiUrl + `/list-items/${formData.id}`,
      method: 'PATCH',
      headers: {
      Authorization: 'Token token=' + store.user.token
    },
      data: formData
  })
}
}

module.exports = {
    onCreateItem,
    onGetItems,
    onGetItem,
    onUpdateItem,
    onDeleteItem
}

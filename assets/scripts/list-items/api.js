'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createListItem = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getListItems = function () {
  return $.ajax({
    url: config.apiUrl + '/list-items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const onGetItem = function (id) {
//   return $.ajax({
//       url: config.apiUrl + '/list-items/' + `${id}`,
//       method: 'GET',
//       headers: {
//       Authorization: 'Token token=' + store.user.token
//       }
//     })
// }

const deleteListItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/list-items/' + `${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const updateListItem = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + `/list-items/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createListItem,
  getListItems,
  updateListItem,
  deleteListItem
}

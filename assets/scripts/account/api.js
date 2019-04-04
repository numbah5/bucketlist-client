'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createAccount = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getAccount = function () {
  return $.ajax({
    url: config.apiUrl + '/accounts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAccount = function (id) {
  return $.ajax({
    url: config.apiUrl + '/accounts/' + `${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const updateAccount = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + `/accounts/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount
}

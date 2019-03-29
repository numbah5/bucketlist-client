'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').hide()
  $('#bucket-list-page').hide()
  $('#go-to-sign-up-button').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
  })
  $('#go-to-sign-in-button').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
  })
  $('#sign-in-button').on('click', () => {
    $('#authentication-page').hide()
    $('#bucket-list-page').show()
  })
  $('#sign-up-button').on('click', () => {
    $('#authentication-page').hide()
    $('#bucket-list-page').show()
  })
  $('#sign-out-button').on('click', () => {
    $('#account-modal').modal('hide')
    $('#bucket-list-page').hide()
    $('#sign-in').show()
    $('#authentication-page').show()
    $('#sign-up').hide()
  })
  $('#add-button').on('click', () => {
    $('.bucket-list-item').css('text-decoration', 'line-through')
  })
})

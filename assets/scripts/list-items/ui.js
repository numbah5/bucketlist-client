'use strict'


const createListItemSuccess = (responseData) => {
  $('#user-message').text('You have successfully added to your Bucket List!')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}



const getItemsSuccess = function (responseData) {
  const listItems = responseData.user.listItems
  $('#display').html(' ')
  for (let i = 0; i < (user.listItems).length; i++) {

const userHtml = (`

      <div class="col-sm-4 col-lg-3 box">
    <p>
          id: ID: ${user.listItems[i].id}
          <br>
          title: ${user.listItems[i].title}
          <br>
          description: ${user.listItems[i].description}
          <br>

     </p>

    </div>
    `)
}

const createItemFailure = () => {
  $('#user-message').text('Failed to create Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}


const updateItemSuccess = function (responseData) {
  $('#user-message').html('DAY UPDATED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)

}

const deleteItemSuccess = function (responseData) {
$('#user-message').html('ENTRY DELETED')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
}

const failure = () => {

  $('#user-message').text('something went wrong')

  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
// $('form').trigger('reset')
}


const deleteItemFailure = () => {
  $('#user-message').text('Failed to delete Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
// $('form').trigger('reset')
}

const updateItemFailure = () => {
  $('#user-message').text('Failed to update Bucket list Item! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}

const getItemsFailure = () => {
  $('#user-message').text('Failed to get Bucket list Items! :( Please try again.')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  // $('form').trigger('reset')
}

$('.bucket-list-item').css('text-decoration', 'line-through')

module.exports = {
createItemSuccess,
getItemsSuccess,
updateItemSuccess,
deleteItemSuccess,
createItemFailure,
getItemsFailure,
updateItemFailure,
deleteItemFailure
}

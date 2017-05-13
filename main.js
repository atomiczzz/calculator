let $ = window.$
let numStore = []
let operatorStore = []
let display = document.querySelector('#display')

// Get data attr and push to numStore array
$(document).ready(function () {
  $('.calc_button').click(function () {
    numStore.push(this.dataset.num)
    let display = document.querySelector('#display')
    display.innerHTML += this.dataset.num
    console.log(numStore)
  })
})
// Get operator and push to operatorStore
$(document).ready(function () {
  $('.op_button').click(function () {
    operatorStore.push(this.dataset.num)
    let display = document.querySelector('#display')
    display.innerHTML += this.dataset.num
    console.log(operatorStore)
  })
})
// Equal button on click activates funcions


// Operator functions

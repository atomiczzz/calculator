let $ = window.$
$(document).ready(function () {
  let numStore = []
  let display = document.querySelector('#display')

  // Get data attr and push to numStore array
  $('.calc_button').click(function () {
    numStore.push(this.dataset.num)
    display.innerHTML += this.dataset.num
    console.log(numStore)
  })

  // Get operator and push to operatorStore
  $('.op_button').click(function () {
    numStore.push(this.dataset.num)
    display.innerHTML += this.dataset.num
  })

  // Equal button on click activates funcions
  $('#equal').click(function () {
    operator()
    display.innerHTML = operator()
  })

  $('#clear').click(function () {
    numStore = ['']
    display.innerHTML = '0'
  })

  // perator functions
  let operator = function () {
    let sum = numStore.reduce(function (accum, currentOp, index, arr) {
      let total = parseFloat(arr[index + 1])
      accum = parseFloat(accum)
      if (currentOp === '+') {
        accum += total
      } else if (currentOp === '-') {
        accum -= total
      } else if (currentOp === '*') {
        accum *= total
      } else if (currentOp === '/') {
        accum /= total
      }
      return accum
    }, numStore[0])
    return sum
  }
})

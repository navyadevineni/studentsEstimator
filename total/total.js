const total = (input1, input2) => { return input1 * input2 }

const total = new Vue({
  el: '#adder',
  data: {
    inp1: 'countOfCourses',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your sum is ${add(i, j)}.`
    }
  }
})
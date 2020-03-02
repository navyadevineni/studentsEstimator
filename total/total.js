const total = (input1, input2) => { return input1 * input2 }

const total = new Vue({
  el: '#total',
  data: {
    inp1: 'countOfCourses',
    inp2: 'averageOfCourses',
    input1: 5,
    input2: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.input1)
      const j = parseInt(this.input2)
      return `${this.guest}, your total is ${total(i, j)}.`
    }
  }
})
const total = (input1, input2) => { return input1 * input2 }

const total = new Vue({
  el: '#total',
  data: {
    inp1: 'countOfCourses',
    inp2: 'averageOfCourses'
    input1: 5,
    input2: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.result1)
      const j = parseInt(this.result2)
      return `${this.}, your total is ${add(i, j)}.`
    }
  }
})
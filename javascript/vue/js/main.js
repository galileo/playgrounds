const app = new Vue({
  el: '#app',
  data: {
    message: 'Kamil, love\'s Vue.js'
  }
})

const form = new Vue({
  el: '#form',
  data: {
    name: 'Input element'
  }
})

const todos = new Vue({
  el: '#todos',
  data: {
    kamil: 'jak tam',
    groceryList: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'Next item' }
    ]
  }
})

todos.$watch('kamil', () => console.log('zmiana'))

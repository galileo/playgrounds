const liquid = new Vue({
  el: '#app',
  data: {
    aLvl: 0,
    bLvl: 0
  },
  computed: {
    aHeight: function () {
      this.balance()
      return this.aLvl + '%'
    },
    bHeight: function () {
      this.balance()
      return this.bLvl + '%'
    },
    pipe: function () {
      return this.aLvl || this.bLvl
    }
  },
  methods: {
    balance: _.debounce(function () {
      setTimeout(() => {
        if (this.aLvl !== this.bLvl) {
          if (this.aLvl > this.bLvl) {
            this.aLvl -= 0.1
            this.bLvl += 0.1
          } else {
            this.bLvl -= 0.1
            this.aLvl += 0.1
          }
        }
      }, 25)
    })
  }
})

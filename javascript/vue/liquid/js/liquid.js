Vue.component('water-container', {
  template: `<div class="row">
    <section>
      <button v-on:click="fillContainer">Fill</button>
    </section>
    <section class="row">
      <div class="container">
        <div class="liquid"
             v-bind:style="{ height: localLevel}"
        >
        {{localLevel}}%
        </div>
      </div>
    </section>
    <section class="row"
             v-if="pipe"
    >
      <div class="channel">
        <div v-if="localLevel" class="liquid" style="height: 100%;">
        </div>
      </div>
    </section>
  </div>`,
  props: ['index', 'expected_water_level', 'pipe'],
  data: function (component) {
    return {
      localLevel: component.expected_water_level,
      fillStep: 10,
    }
  },

  watch: {
    expected_water_level: function (val) {
      console.log()

      this.balance()
      return val
    },
  },
  methods: {
    fillContainer: function () {
      if (this.loca)
      this.localLevel += this.fillStep
      this.$emit('fill', this.fillStep)
    },
    balance: _.throttle(function () {
      const calculate = () => {
        setTimeout(() => {
          if (this.expected_water_level > this.localLevel) {
            this.localLevel += 1
            calculate()

          } else if (this.expected_water_level < this.localLevel) {
            this.localLevel -= 1
            calculate()
          }
        }, 120)
      }

      calculate()

      return this.localLevel
    }, 100)
  }
})

const liquid = new Vue({
  el: '#app',
  data: {
    containers: [{}, {}],
    fillStep: 5,
    realAverageWaterLevel: 0
  },
  computed: {
    averageWaterLevel: function () {
      return Math.round(this.realAverageWaterLevel)
    }
  },
  methods: {
    isNotLastContainer: function (index) {
      return index !== this.containers.length - 1
    },
    addContainer: function () {
      const length = this.containers.length

      this.containers.push({})
      this.realAverageWaterLevel = this.realAverageWaterLevel * length / (length + 1)
    },
    removeContainer: function () {
      if (this.containers.length <= 2) {
        return
      }

      this.containers.pop()

      this.fillWater(this.averageWaterLevel)
    },
    fillWater: function (value) {
      this.realAverageWaterLevel += value / this.containers.length
    }
  }
})


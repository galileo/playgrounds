class Tank {
  constructor () {
    this.liquid = 0
    this.name = '0'
  }

  pour (value = 1) {
    const askedLiquidLevel = this.liquid + value

    this.liquid = askedLiquidLevel > 100 ? 100 : askedLiquidLevel
  }

  effuse () {
    this.liquid -= 1
  }

  setLiquidLevel (level) {
    console.log('Forced level', level, this.name)
    this.liquid = level > 100 ? 100 : level
  }

  fluidPercentage () {
    return this.liquid
  }
}

Vue.component('pipe', {
  template: `<div>
  Left: {{left}}
  Right: {{right}}
  Total: {{sum}}
  
  <button v-on:click="toggle">{{open ? 'Close' : 'Open'}}</button>
  </div>
`,
  data: function () {
    return {
      open: true
    }
  },
  props: ['left', 'right', 'set_left', 'set_right'],
  computed: {
    sum: function () {
      return this.left + this.right
    }
  },
  watch: {
    left: function () {this.balance()},
    right: function () {this.balance()},
  },
  methods: {
    toggle: function () {
      this.open = !this.open
      this.balance()
    },
    balance: function () {
      const { left, right } = this

      const leftLiquidLevel = left
      const rightLiquidLevel = right

      console.info('Balancing started', leftLiquidLevel, rightLiquidLevel)

      if (leftLiquidLevel === rightLiquidLevel) {
        return console.info('Liquid level is equal')
      }

      if (!this.open) {
        return console.warn('Pipe is closed we will not balance the liquid state')
      }

      const newLevel = Math.round(leftLiquidLevel + rightLiquidLevel / 2)
      this.set_left(newLevel)
      this.set_right(newLevel)
    }
  }
})

Vue.component('water-container', {
  template: `<div class="row">
    <section>
      <button v-on:click="fill">Fill</button>
    </section>
    <section class="row">
      <div class="container">
        <div class="liquid"
             v-bind:style="heightStyle"
        >
        {{height}}%
        </div>
      </div>
    </section>
  </div>`,
  props: ['tank'],
  computed: {
    heightStyle: function () {
      return {
        height: this.height
      }
    },
    height: function () {
      return this.tank.fluidPercentage()
    }
  }, methods: {
    fill: function () {
      console.log('Filling from vue')
      this.tank.pour()
    }
  }
})

const tank = new Tank()
tank.name = '1'
const tank1 = new Tank()
tank1.name = '2'

const liquid = new Vue({
  el: '#app',
  data: {
    containers: [tank, tank1],
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


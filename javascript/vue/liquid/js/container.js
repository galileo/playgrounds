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
  </div>`,
  props: ['index', 'expected_water_level', 'pipe'],
  data: function (component) {
    return {
      localLevel: component.expected_water_level,
      fillStep: 10,
    }
  },
  watch: {
    'container': function () {
      console.log('container did change')
    }
  },
  methods: {
    fillContainer: function () {
      this.container.fill()
    }
  }
})

class Container {
  constructor () {
    this.liquid = 0
  }

  pour (value = 1) {
    this.liquid += value
  }

  effuse () {
    this.liquid -= 1
  }

  waterSate () {
    return this.liquid
  }
}

const container = new Container()

container.pour()

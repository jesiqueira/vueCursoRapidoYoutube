const floresDetalhes = {
  template: `
          <p>{{flor.title}}</p>
          <img v-bind:src="flor.image" v-bind:alt="flor.title" style="max-width: 100px"/>
          <strong v-if="flor.stars > 0">{{flor.stars}}</strong>
          <br>
          <button @click.prevent="addCarr(flor)"v-else :disabled="florInCarr" :class="['color', {'button-disable' : florInCarr}]">
              ADD CARRINHO
          </button>
          
    `,
    emits:['add-flor-carr'],
  //   <p>Sou um component {{flor}}- Flores Detail</p>
  // <p>Sou um component {{teste}}- Flores Detail</p>
    // props: ["flor", "florInCarr"],
  props: {
    flor: {
      type: Object,
      required: true,
    },
    florInCarr: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      exemple: 123,
    };
  },
  methods: {
    addCarr(florr) {
      console.log("Add carr in component");
    //   console.log(this.florInCarr);
      this.$emit('add-flor-carr', florr)
    },
  },
};

app.component("flores-detalhe", floresDetalhes);

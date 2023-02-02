const myApp = {
  data() {
    return {
      title: "Curso de Vue 3",
      nome: "Edmar",
      lastname: "Siqueira",
      flores: {
        title: "Flor 01",
        descricao: "Clico vivo Um",
        image: "/assets/images/flor.jpeg",
        stars: 3,
      },
      flores2: {
        title: "Flor 01",
        descricao: "Clico vivo Um",
        image: "/assets/images/flor2.jpeg",
        stars: 0,
      },
      floresArr: [
        {
          title: "Flor 01",
          descricao: "Clico vivo Um",
          image: "/assets/images/flor.jpeg",
          stars: 3,
        },
        {
          title: "Flor 01",
          descricao: "Clico vivo Um",
          image: "/assets/images/flor2.jpeg",
          stars: 0,
        },
      ],
      card: [],
      //   textColor: "#000",
      //   bgColor: "#fff",
      styles: {
        backgroundColor: "#000",
        color: "#fff",
      },
      themeBlack: true,
    };
  },
  computed: {
    fullname() {
      return this.nome + " " + this.lastname;
    },
  },
  methods: {
    addCarr(flor) {
      this.card.push(flor);
    },
    inCarr(flor) {
      return this.card.indexOf(flor) != -1;
      console.log("me chamadou");
    },
    removeCarr(flores) {
      const car = this.card.filter((flor, index) => {
        return flores != flor;
      });
      this.card = car;
    },

    toogleTheme() {
      this.themeBlack = !this.themeBlack;
      // console.log(this.themeBlack);
      if (this.themeBlack) {
        this.styles.backgroundColor = "#000";
        this.styles.color = "#fff";
      } else {
        this.styles.backgroundColor = "#fff";
        this.styles.color = "#000";
      }
    },
  },
};

const app = Vue.createApp(myApp);

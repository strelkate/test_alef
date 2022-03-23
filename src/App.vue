<template>
  <div id="app" class="app">
    <Header class="app__header" ref="header"/>
    <div class="app__wrapper">
      <CardProduct/>
      <a href="#" class="app__link">Посмотреть все стили</a>
      <GridPhoto/>
      <Footer/>
    </div>

  </div>
</template>

<script>

import Header from "@/components/Header";
import CardProduct from "@/views/CardProduct";
import GridPhoto from "@/views/GridPhoto";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, GridPhoto, CardProduct, Header},
  mounted() {
    let lastPos = 0;
    const header = this.$refs.header;

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.$el.classList.contains('app__header--hide');

    window.addEventListener('scroll', () => {
      const pos = scrollPosition()
      if (pos > lastPos && !containHide() && pos > 0) {
        //scroll down
        header.$el.classList.add('app__header--hide');
      } else if (pos < lastPos && containHide()) {
        //scroll up
        header.$el.classList.remove('app__header--hide');
      }
      lastPos = pos;
    })
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #333333;
  overflow-y: scroll;

}

img {
  max-width: 100%;
  object-fit: cover;
}

.container, .container-photo {
  max-width: 1390px;
  width: 100%;
  margin: auto;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &__link {
    color: #333333;
    text-align: center;
    margin: 32px 0;
    display: block;

    &:hover {
      font-weight: 600;
    }
  }

  &__header {
    &--hide {
      transform: translateY(-100%);
    }
  }

  &__wrapper {
    overflow-y: scroll;
  }
}

.button {
  background-color: #5A98D0;
  border-radius: 10px;
  padding: 15px;
  color: #FFFFFF;
  border: none;
  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
  font-size: 16px;
  line-height: 26px;
  width: 120px;
  cursor: pointer;
  margin-top: 20px;
}

@media (max-width: 1400px) {
  .container, .container-photo {
    max-width: 1154px;
  }
}

@media (max-width: 1200px) {
  .container, .container-photo {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .container, .container-photo {
    max-width: 686px;
  }

  .app {
    &__link {
      margin: 58px 0;
    }
  }
}

@media (max-width: 767px) {
  .container, .container-photo {
    width: 89%
  }
}

@media (max-width: 576px) {
  .container-photo {
    width: 100%;
  }

  .app {
    &__link {
      &:hover {
        font-weight: 400;
      }
    }
  }
}


</style>

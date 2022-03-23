<template>
  <div class="menu">
    <div class="menu__overlay" @click="onCloseMenuClick"></div>
    <div class="menu__wrapper">
      <div class="container">
        <div class="menu__close" @click="onCloseMenuClick">
          <svg class="menu__icon">
            <use xlink:href="../../public/assets/sprite.svg#close"></use>
          </svg>
        </div>
        <ul class="menu__ul">
          <li class="menu__item"><a href="#" class="menu__link">Постельное белье</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Одежда для дома</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Одежда для улицы</a></li>
          <li class="menu__item" @click="onCloseMenuClick"><a href="#" class="menu__link">Выход</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MenuMobile",
  methods: {
    closeMenu() {
      this.$emit('onClose')
    },
    onCloseMenuClick() {
      this.closeMenu()
    },
  },
}
</script>

<style lang="scss">
.menu {
  width: 100%;

  &__overlay {
    position: fixed;
    z-index: 101;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
  }

  &__wrapper {
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    width: 100%;
    height: 277px;
    background-color: #FFFFFF;
  }

  &__close {
    position: absolute;
    z-index: 103;
    right: 25px;
    top: 20px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    padding: 5px;
    cursor: pointer;
  }

  &__ul {
    margin: 80px 0 0 0;
    list-style-type: none;
    padding: 0;
  }

  &__item {
    margin-bottom: 30px;
  }

  &__link {
    font-size: 12px;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
    color: #333333;
  }
}
</style>
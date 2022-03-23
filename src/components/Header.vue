<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper" v-if="!showMenuMobile">
        <a href="#" class="header__logo">Logo</a>
        <div class="header__user">
          <svg class="header__icon">
            <use xlink:href="../../public/assets/sprite.svg#profile"></use>
          </svg>
          <svg class="header__icon">
            <use xlink:href="../../public/assets/sprite.svg#favorite"></use>
          </svg>
          <svg class="header__icon">
            <use xlink:href="../../public/assets/sprite.svg#cart"></use>
          </svg>
          <button class="header__menu-button" @click="onOpenMenuClick">
            <span class="header__menu-button--line"></span>
            <span class="header__menu-button--line"></span>
            <span class="header__menu-button--line"></span>
          </button>
        </div>
      </div>
    </div>
    <MenuMobile v-if="showMenuMobile" @onClose="closeMenu"/>
  </div>
</template>

<script>
import MenuMobile from "@/components/MenuMobile";

export default {
  name: "Header",
  data() {
    return {
      showMenuMobile: false
    }
  },
  components: {MenuMobile},
  methods: {
    onOpenMenuClick() {
      this.showMenuMobile = true
    },
    closeMenu() {
      this.showMenuMobile = false
    }
  },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all .3s linear;
  z-index: 100;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    margin: 0;
    text-transform: uppercase;
    color: #000000;
    font-weight: 700;
    font-size: 22px;
    line-height: 16px;
    text-decoration: none;
  }

  &__user {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__icon {
    width: 24px;
    height: 24px;
    padding: 4px 4.5px;
    stroke: #333333;
    fill: none;
    cursor: pointer;

    &:nth-child(3) {
      margin-right: 0;
    }
  }

  &__menu-button {
    display: none;

    &--visible {
      display: flex;
    }

    &--line {
      width: 18px;
      height: 1px;
      background-color: #333333;
    }
  }
}

@media (max-width: 576px) {
  .header {
    padding: 18px 0 25px 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);

    &__icon {
      &--menu {
        stroke: #333333;
        display: block;
      }
    }

    &__menu-button {
      display: flex;
      width: 24px;
      height: 24px;
      padding: 6px 3px;
      border: none;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>
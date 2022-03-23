<template>
  <div class="item-grid">
    <img :src="src" alt="Photo" class="item-grid__image" @mouseover="mouseOverPhoto">
    <div class="item-grid__hover" :class="hover?'item-grid__hover--active':''" @mouseleave="mouseLeavePhoto">
      <svg class="item-grid__icon item-grid__icon--slider">
        <use xlink:href="../../public/assets/sprite.svg#slider"></use>
      </svg>
      <div class="item-grid__wrapper">
        <svg class="item-grid__icon item-grid__icon--cart">
          <use xlink:href="../../public/assets/sprite.svg#cart"></use>
        </svg>
        <div class="item-grid__text">Узнай, что на мне</div>
      </div>
      <div class="item-grid__favorite">
        <svg class="item-grid__icon item-grid__icon--favorite">
          <use xlink:href="../../public/assets/sprite.svg#favorite"></use>
        </svg>
        <div class="item-grid__favorite--number">200</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemGridPhoto",
  data() {
    return {
      hover: false
    }
  },
  props: {
    src: {
      required: true,
      type: String
    },
  },
  methods: {
    mouseOverPhoto() {
      this.hover = true
    },
    mouseLeavePhoto() {
      this.hover = false
    }
  }
}
</script>

<style lang="scss">
.item-grid {
  position: relative;

  &__image {
    width: 100%;
    height: 100%;

    &--1 {
      grid-row: 1/3;
      grid-column: span 2;
    }
  }

  &__hover {
    background: #333333;
    opacity: 0.7;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;

    &--active {
      display: block;
    }
  }

  &__icon {
    stroke: #FFFFFF;
    width: 16px;
    height: 16px;

    &--slider {
      position: absolute;
      top: 16px;
      right: 16px;
    }

    &--favorite {
      margin-right: 6px;
      fill: #FFFFFF;
    }

    &--cart {
      width: 32px;
      height: 34px;
    }
  }

  &__wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    top: 50%;
    left: 50%;
    max-height: 100%;
    transform: translate(-50%, -50%);
  }

  &__favorite {
    display: flex;
    align-items: center;
    position: absolute;
    color: #FFFFFF;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 576px) {
  .item-grid {
    &__hover {
      &--active {
        display: none;
      }
    }
  }
}
</style>
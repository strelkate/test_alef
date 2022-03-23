<template>
  <div class="item-miniatures" @click="onClickCallback(src)">
    <img :src="src" alt="Product photo preview"
         class="item-miniatures__image">
  </div>
</template>

<script>
export default {
  name: "ItemMiniaturesPhoto",
  props: {
    src: {
      required: true,
      type: String
    },
    onClickCallback: {
      type: Function,
      required: true,
    },
  },
  methods: {

  }
}
</script>

<style lang="scss">
.item-miniatures {
  &__image {
    height: 91px;
    background: #FFFFFF;
    margin-bottom: 7px;
    cursor: pointer;
  }
}

@media (max-width: 576px) {
  .item-miniatures {
    &__image {
      height: 52px;
      margin-bottom: 4px;
    }
  }
}
</style>
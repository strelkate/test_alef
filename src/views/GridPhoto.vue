<template>
  <div class="grid-photo">
    <div class="container-photo">
      <div class="grid-photo__wrapper">
        <ItemGridPhoto
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            :class="index===0?'item-grid__image--1':''"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemGridPhoto from "@/views/ItemGridPhoto";

export default {
  name: "GridPhoto",
  components: {ItemGridPhoto},
  data() {
    return {
      images: ["assets/photo_1.jpg", "assets/photo_2.jpg", "assets/photo_3.jpg", "assets/photo_4.jpg", "assets/photo_5.jpg"]
    }
  },

}
</script>

<style lang="scss">
.grid-photo {
  background-color: #FFFFFF;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 23vw);
    grid-gap: 16px;
  }
}

@media (max-width: 992px) {
  .grid-photo {
    &__wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 8px;
    }
  }
}

</style>
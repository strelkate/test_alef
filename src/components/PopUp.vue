<template>
  <div class="pop-up">
    <div class="pop-up__dialog" ref="popUpDialog" :class="this.GET_SHOW_POP_UP?'pop-up__dialog--visible':''">
      <div class="pop-up__title">{{this.GET_TEXT_POP_UP}}</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PopUp",
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['GET_SHOW_POP_UP', 'GET_TEXT_POP_UP', 'GET_TYPE_POP_UP']),
    color() {
      const popUpDialog = this.$refs.popUpDialog
      if (!popUpDialog) {
        return
      }
      switch (this.GET_TYPE_POP_UP) {
        case 'error':
          popUpDialog.style.backgroundColor = 'red';
          break
        case 'warning':
          popUpDialog.style.backgroundColor = 'yellow';
          break
        case 'success':
          popUpDialog.style.backgroundColor = 'green';
          break
      }
    }
  },
}
</script>

<style lang="scss">
.pop-up {
  &__dialog {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 350px;
    padding: 15px 20px;
    background-color: green;
    color: #FFFFFF;
    font-size: 14px;
    z-index: 1000;
    visibility: hidden;
    opacity: 0.5;
    overflow: auto;
    transition: .55s opacity;

    &--visible {
      visibility: visible;
      opacity: 1;
    }
  }
}
@media (max-width: 576px) {
  .pop-up {
    &__dialog {
      right: 10px;
    }
  }
}
</style>
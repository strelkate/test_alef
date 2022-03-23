<template>
  <div class="card-product">
    <div class="card-product__container">
      <div class="card-product__wrapper">
        <div class="card-product__photo">
          <img :src="srcMain" alt="Photo product" class="card-product__main-photo">
          <div class="card-product__miniatures">
            <ItemMiniaturesPhoto
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                :onClickCallback="onMiniatureClick"
            />
          </div>
        </div>
        <div class="card-product__container-text">
          <div class="card-product__text">
            <h2 class="card-product__title">{{ nameProduct }}</h2>
            <span class="card-product__vendor-code">Арт. 02765/46</span>
            <div class="card-product__reviews">
              <span class="card-product__reviews--title">Отзывы</span>
              <div class="star">
                <svg class="card-product__star">
                  <use xlink:href="../../public/assets/sprite.svg#star"></use>
                </svg>
                <svg class="card-product__star">
                  <use xlink:href="../../public/assets/sprite.svg#star"></use>
                </svg>
                <svg class="card-product__star">
                  <use xlink:href="../../public/assets/sprite.svg#star"></use>
                </svg>
                <svg class="card-product__star">
                  <use xlink:href="../../public/assets/sprite.svg#star"></use>
                </svg>
                <svg class="card-product__star card-product__star--outline">
                  <use xlink:href="../../public/assets/sprite.svg#star-outline"></use>
                </svg>

              </div>
              <span class="card-product__reviews--number">14 отзывов</span>
              <svg class="card-product__arrow">
                <use xlink:href="../../public/assets/sprite.svg#arrow"></use>
              </svg>
            </div>
            <div class="card-product__price">
              <span class="card-product__price--new">800 ₽</span>
              <span class="card-product__price--old">1 500 ₽</span>
              <svg class="card-product__arrow">
                <use xlink:href="../../public/assets/sprite.svg#arrow"></use>
              </svg>
            </div>
            <div class="card-product__promo">
              <span class="card-product__label">скидка -36%</span>
              <span class="card-product__label">акция -20%</span>
            </div>
            <select
                class="card-product__select"
                v-model="cardProductSelect"
            >
              <option class="card-product__option" disabled value="">Выбрать размер</option>
              <option class="card-product__option" value="92">92</option>
              <option class="card-product__option" value="104">104</option>
              <option class="card-product__option" value="110">110</option>
              <option class="card-product__option" value="116">116</option>
            </select>
            <a href="#" class="card-product__link card-product__size">Определить размер</a>
            <div class="card-product__add-cart">
              <div class="card-product__quantity">
                <span class="card-product__quantity--button" @click="onAddProductClick">+</span>
                <span class="card-product__quantity--number">{{ quantityProduct }}</span>
                <span class="card-product__quantity--button" @click="onDeleteProductClick">-</span>
              </div>
              <div class="card-product__buttons">
                <button class="card-product__button" @click="onAddCardClick">Добавить в корзину</button>
                <button class="card-product__button card-product__favorite" @click="onAddFavoriteClick">
                  <svg class="card-product__favorite--icon">
                    <use xlink:href="../../public/assets/sprite.svg#favorite"></use>
                  </svg>
                </button>
              </div>
            </div>
            <a href="#" class="card-product__link">Купить в 1 клик</a>
            <div class="card-product__line"></div>
            <ul class="card-product__list">
              <li class="card-product__item">
                <svg class="card-product__icon">
                  <use xlink:href="../../public/assets/sprite.svg#description"></use>
                </svg>
                <a href="#" class="card-product__link">Описание товара</a>
              </li>
              <li class="card-product__item">
                <svg class="card-product__icon">
                  <use xlink:href="../../public/assets/sprite.svg#clock"></use>
                </svg>
                <a href="#" class="card-product__link">Доставка и возврат</a>
              </li>
              <li class="card-product__item">
                <svg class="card-product__icon">
                  <use xlink:href="../../public/assets/sprite.svg#card"></use>
                </svg>
                <a href="#" class="card-product__link">Способы оплаты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <PopUp/>
  </div>
</template>

<script>

import ItemMiniaturesPhoto from "@/views/ItemMiniaturesPhoto";
import PopUp from "@/components/PopUp";
import {mapActions} from "vuex";

export default {
  name: "CardProduct",
  components: {PopUp, ItemMiniaturesPhoto},
  data() {
    return {
      cardProductSelect: '',
      nameProduct: 'Пижама для девочек',
      quantityProduct: 1,
      images: ["assets/photo_main_1.jpg", "assets/photo_main_2.jpeg", "assets/photo_main_3.jpeg", "assets/photo_main_4.jpeg", "assets/photo_main_5.jpeg"],
      srcMain: '',

    }
  },
  methods: {
    ...mapActions(['SET_POP_UP']),
    onAddProductClick() {
      return this.quantityProduct += 1
    },
    onDeleteProductClick() {
      if (this.quantityProduct > 1) {
        return this.quantityProduct -= 1
      }
    },
    onMiniatureClick(src) {
      this.srcMain = src
    },
    onAddCardClick() {
      this.SET_POP_UP({
        type: 'success',
        text: `Товар "${this.nameProduct}" в количестве ${this.quantityProduct} единиц добавлен в корзину`
      })

    },
    onAddFavoriteClick() {
      this.SET_POP_UP({type: 'success', text: `Товар "${this.nameProduct}" добавлен в избранное`})

    }
  },
  created() {
    this.srcMain = this.images[0]
  }

}
</script>

<style lang="scss">
.card-product {
  &__container {
    max-width: 1390px;
    width: 100%;
    margin: auto;
  }

  &__wrapper {
    display: flex;
    margin-top: 72px;
  }

  &__photo {
    margin-right: 36px;
    width: 686px;
    position: relative;
  }

  &__main-photo {
    width: 686px;
  }

  &__miniatures {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 70px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    margin-top: 22px;
    margin-bottom: 8px;
    letter-spacing: 0;
  }

  &__vendor-code {
    color: #828282;
    line-height: 16px;
    margin-bottom: 18px;
  }

  &__star {
    width: 12px;
    height: 12px;
    margin-right: 2px;

    &:nth-child(5) {
      margin-right: 5px
    }
  }

  &__reviews {
    display: flex;
    align-items: center;
    margin-bottom: 46px;

    &--title {
      margin-right: 13px;
    }

    &--number {
      margin-right: 4px;
    }
  }

  &__arrow {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  &__price {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &--new {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      text-transform: uppercase;
      margin-right: 12px;
    }

    &--old {
      text-decoration-line: line-through;
      color: #828282;
      margin-right: 20px;
    }
  }

  &__promo {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
  }

  &__label {
    padding: 4px 8px;
    border: 1px solid #333333;
    margin-right: 9px;
    font-size: 12px;
    line-height: 16px;
  }

  &__select {
    //width: 315px;
    //background-color: #FFFFFF !important;
    //border: 1px solid #333333;
    //padding: 12px 16px;
    //font-family: 'Open Sans', sans-serif;
    //font-style: normal;
    //font-weight: 400;
    //font-size: 14px;
    //line-height: 20px;
    //color: #333333;
    //letter-spacing: 0.04em;
    //margin-bottom: 12px;
    //outline: none;

    display: block;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
    padding: 12px 16px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #333333;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml, \
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">\
      <path d="M14.75 0.75L7.75 8.75L1.25 0.75" stroke="%23333333"/>\
    </svg>'), linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 10px top 50%, 0 0;
    background-size: 16px 10px, 100%;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: #333333;
    }

    &:focus {
      border-color: #333333;
      color: #333333;
      outline: none;
    }
  }

  &__option {
    font-weight: normal;
  }

  &__link {
    color: #333333;

    &:hover {
      font-weight: 600;
    }
  }

  &__size {
    margin-bottom: 40px;
  }

  &__add-cart {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F2F2F2;
    width: 145px;
    margin-right: 12px;

    &--button {
      cursor: pointer;
      padding: 12px 20px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
  }

  &__button {
    background: #333333;
    border: 1px solid #333333;
    color: #FFFFFF;
    padding: 12px 28px;
    cursor: pointer;

    &:hover {
      background: #003970;
    }
  }

  &__favorite {
    padding: 10px;
    margin-left: 4px;

    &--icon {
      stroke: #FFFFFF;
      width: 16px;
      height: 16px;
      fill: none;
    }
  }

  &__line {
    border: 0.5px solid #C4C4C4;
    margin: 29px 0 24px -20px;
  }

  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__icon {
    width: 17px;
    height: 17px;
    margin-right: 7px;
  }
}

//*[dir= "rtl" ] .card-product__select, :root:lang (ar) . card-product__select, :
//root:lang(iw) .card-product__select {
//  background-position: left .7em top 50%, 0 0;
//  padding: 12px 16px;
//}

@media (max-width: 1400px) {
  .card-product {
    &__container {
      max-width: 1154px;
    }
  }
}

@media (max-width: 1200px) {
  .card-product {
    &__container {
      max-width: 960px;
    }

    &__quantity {
      margin-bottom: 15px;
    }

    &__add-cart {
      flex-direction: column;
      align-items: start;
      margin-bottom: 21px;
    }
  }
}

@media (max-width: 992px) {
  .card-product {
    &__container {
      max-width: 686px;
    }

    &__photo {
      margin-right: 0;
    }

    &__wrapper {
      flex-direction: column;
    }

    &__line {
      margin: 29px 0 24px 0;
    }
  }
}

@media (max-width: 767px) {
  .card-product {
    &__container {
      width: 89%;
    }

    &__photo {
      width: 100%;
    }
  }
}

@media (max-width: 576px) {
  .card-product {
    &__container {
      width: 100%;

      &-text {
        width: 89%;
        margin: auto;
      }
    }

    &__main-photo {
      width: 100%;
    }

    &__photo {
      width: 100%;
    }

    &__miniatures {
      top: 28px;
      width: 40px;
    }

    &__miniature {
      height: 52px;
      margin-bottom: 4px;
    }

    &__button {
      &:hover {
        background: #333333;
      }
    }

    &__link {
      &:hover {
        font-weight: 400;
      }
    }
  }

}
</style>
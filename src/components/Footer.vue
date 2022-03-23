<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__buyers">
          <div class="footer__title">покупателям</div>
          <ul class="footer__ul">
            <li class="footer__item"><a href="#" class="footer__link">Каталог</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Акции</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Бренды</a></li>
          </ul>
        </div>
        <div class="footer__about">
          <div class="footer__title">о нас</div>
          <ul class="footer__ul">
            <li class="footer__item"><a href="#" class="footer__link">О компании</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Новости</a></li>
            <li class="footer__item"><a href="#" class="footer__link">Команда</a></li>
          </ul>
        </div>
        <form class="footer__contact-form" @submit="onSubmitClick">
          <div class="footer__title">Узнайте первыми о новинках и акциях</div>
          <div class="footer__wrapper">
            <input @input="onInputEmail" v-model="email" type="text" placeholder="Адрес электронной почты"
                   class="footer__input">
            <span class="footer__error" v-if="!isEmailValid">Введите корректный email</span>
            <svg class="footer__input--close" @click="onClearEmail">
              <use xlink:href="../../public/assets/sprite.svg#close"></use>
            </svg>
          </div>

          <button type="submit" class="footer__button">Подписаться</button>
        </form>
      </div>
    </div>
    <PopUp ref="popUp"/>
  </div>
</template>

<script>
import PopUp from "@/components/PopUp";
import {mapActions} from "vuex";
// const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default {
  name: "Footer",
  components: {PopUp},
  data() {
    return {
      email: '',
      isEmailValid: true
    }
  },
  methods: {
     ...mapActions(['SET_POP_UP']),
    onInputEmail() {
      this.isEmailValid = true
    },
    onClearEmail() {
      this.isEmailValid = true
      this.email = ''
    },
    onSubmitClick(e) {
      e.preventDefault();
      if (this.email.match(validEmailRegex)) {
        this.SET_POP_UP({type: 'success',  text:"Вы успешно подписались"})
        this.onClearEmail()
       return
      }
      this.isEmailValid = false
    }
  }
}
</script>

<style lang="scss">
.footer {
  margin-top: 142px;
  margin-bottom: 70px;

  &__container {
    max-width: 1154px;
    margin: auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: minmax(min-content, 335px) minmax(min-content, 335px) 1fr;
    grid-template-rows: repeat(1, 1fr);
  }

  &__title {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  &__item {
    margin-bottom: 8px;
    list-style-type: none;
  }

  &__ul {
    margin: 0;
    padding: 0;
  }

  &__link {
    text-decoration: none;
    color: #333333;

    &:hover {
      text-decoration: underline;
    }
  }

  &__contact-form {
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    position: relative;
  }

  &__input {
    color: #828282;
    border: 1px solid transparent;
    border-bottom: 1px solid #C4C4C4;
    padding: 12px 28px 12px 16px;
    width: 100%;
    position: relative;
    margin-bottom: 35px;
    outline: none;

    &--close {
      width: 16px;
      height: 16px;
      padding: 3.8px;
      position: absolute;
      top: 14px;
      right: 12px;
      cursor: pointer;
    }
  }

  &__error {
    position: absolute;
    font-size: 12px;
    color: red;
    left: 0;
    bottom: 13px;
  }

  &__button {
    border: 1px solid #333333;
    background: #FFFFFF;
    padding: 8px 28px;
    align-self: end;
    cursor: pointer;
    color: #333333;
    right: 0;

    &:hover {
      background: #333333;
      color: #FFFFFF;
    }
  }
}

@media (max-width: 1200px) {
  .footer {
    &__container {
      max-width: 960px;
    }

    &__grid {
      grid-template-columns: minmax(min-content, 250px) minmax(min-content, 250px) 1fr;
    }
  }
}

@media (max-width: 992px) {
  .footer {
    margin-top: 42px;

    &__container {
      max-width: 686px;
    }

    &__grid {
      grid-template-columns: minmax(min-content, 200px) minmax(min-content, 200px) 1fr;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    &__container {
      max-width: 89%;
    }

    &__grid {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(2, 1fr);
      row-gap: 38px;
    }

    &__contact-form {
      grid-column: span 2;
    }
  }
}

@media (max-width: 576px) {
  .footer {
    &__title {
      max-width: 255px;
    }

    &__link {
      &:hover {
        text-decoration: none;
      }
    }

    &__button {
      &:hover {
        background: #FFFFFF;
        color: #333333;
      }
    }
  }
}
</style>
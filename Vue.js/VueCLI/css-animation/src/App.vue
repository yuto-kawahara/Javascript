<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>
    <button @click="show = !show">切り替え</button>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="hi">こんにちわ</p>
      <p v-else key="bye">さよなら</p>
    </transition>
  
    <transition
     appear
     enter-active-class="animate__animated animate__bounce"
     leave-active-class="animate__animated animate__shakeX"
    >
      <p v-if="show">Hello</p>
    </transition>
    <transition
     :name="myAnimation"
     appear
    >
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      myAnimation: 'slide'
    }    
  },
}
</script>

<style scoped>
.fade-enter {
  /* 現れるときの最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのトランジションの状態 */
  transition: opacity .5s;
}
.fade-enter-to {
  /* 現れるときの最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消えるときの最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消えるときのトランジションの状態 */
  transition: opacity .5s;
}
.fade-leave-to {
  /* 消えるときの最後の状態 */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}


@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
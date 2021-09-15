<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{myAnimation}}</p>
    <button @click="show = !show">切り替え</button>
    <br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto;">
      <transition-group name="fade" class="fade-move">
      <li 
        v-for="(number,index) in numbers" 
        :key="number"
        @click="remove(index)"
        >{{number}}</li>
      </transition-group>
    </ul>
    <br>
    <br>
    <transition
    :css="false" 
    @before-enter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @enterCancelled="enterCancelled"
    @beforeLeave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave"
    @leaveCancelled="leaveCancelled"
    >
      <div class="circle" v-if="show">
      </div>
    </transition>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    
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
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";


export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      numbers:[0,1,2],
      nextNumber: 3,
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    }    
  },
  //8つのJavascriptフック
  //Javascriptのフックは非同期の処理で使用できる
  //CSSとJavascriptのアニメーションを同時に実行できる
  methods: {
    randomIndex(){
      return Math.floor(Math.random() * this.numbers.length);
    },
    add(){
      this.numbers.splice(this.randomIndex(),0,this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index){
      this.numbers.splice(index,1);
    },
    beforeEnter(el) {
      //現れる前
      el.style.transform = `scale(0)`
    },
    enter(el,done) {
      //現れる時
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    afterEnter() {
      //現れた後
    },
    enterCancelled() {
      //現れるアニメーションがキャンセルされたとき
    },
    beforeLeave() {
      //消える前
    },
    leave(el,done) {
      //消える時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    afterLeave() {
      //消えた後
    },
    leaveCancelled() {
      //現れるアニメーションがキャンセルされた時
    },
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-move {
  transition: transform 1s;
}
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
  position: absolute;
  width: 200px; 
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
<template>
  <transition>
    <aside v-show="visible" class="fixed left-0 h-full">
      <div class="relative flex transform rotate-90 top-1/2 w-full">
        <p>Smart Airport Taxi</p>
        <p>Scroll</p>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    const options = {
      root: null,
      // rootMargin: "0px 0px -150px",
      threshold: 0,
    };
    const parent = document.getElementById("main");
    const lastChild = parent.lastChild;
    this.onIntersect(lastChild, options);
  },
  methods: {
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.scrollFn, options);
      observer.observe(target);
    },
    scrollFn(entries) {
      for (const e of entries) {
        if (e.isIntersecting) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
    },
  },
};
</script>
<style scoped>
/* ヘッダーロゴ フェード処理ここから */
.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>

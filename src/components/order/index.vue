<template>
  <main class="order">
    <transition mode="out-in" name="fade">
      <keep-alive>
        <!-- dynamic Comonnent -->
        <component
          @next_form="handleNextForm"
          :is="orderComponents[counter]"
        ></component>
        <!-- dynamic Comonnent -->
      </keep-alive>
    </transition>
    <div class="order__indicator-wrapper">
      <span
        @click="handlePrevForm(index)"
        :class="{ active: handleActive(index) }"
        class="order__indicator"
        v-for="(order, index) in orderComponents"
        :key="index"
      ></span>
    </div>
  </main>
</template>

<script>
export default {
  name: "Order",
  components: {
    FirstOrder: () => import("./first-order"),
    SecondOrder: () => import("./second-order")
  },
  data() {
    return {
      orderComponents: ["FirstOrder", "SecondOrder"],
      counter: 0
    };
  },
  methods: {
    handlePrevForm(index) {
      if (this.counter >= index) {
        this.counter = index;
      }
    },
    handleNextForm() {
      if (this.counter >= this.orderComponents.length - 1) {
        return;
      }
      this.counter++;
    },
    handleActive(index) {
      if (index === this.counter) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

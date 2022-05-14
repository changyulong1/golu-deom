<template>
  <div class="g-toast">
    <slot></slot>
    <div class="line"></div>
    <span class="clear" v-if="closButton" @click="onLosClick">
      {{ closButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closButton:{
      type:Object,
      default(){
        return {
          text:'关闭',callback: undefined
        }
      }
    }

  },
  mounted() {
    if(this.autoClose){
      setTimeout(() => {
        this.clear()
      },this.autoCloseDelay*1000 )
    }
  },
  methods: {
    clear() {
      this.$el.remove()
      this.$destroy()
    },
    log(){
      console.log('测试')
    },
    onLosClick() {
      this.clear()
      if (this.closButton && typeof this.closButton.callback==="function") {
          this.closButton.callback(this)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 12px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.g-toast {
  font-size: $font-size;
  height: $toast-height;
  background: $toast-bg;
  line-height: 1.8;
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  >.clear{
    padding-left: 16px;
    flex-shrink: 0;
  }
  >.line{
    height: 100%;
    border-left:1px solid #666;
    margin-left: 16px;
  }
}

</style>

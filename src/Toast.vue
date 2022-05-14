<template>
  <div class="wrapper" :class="toastClasses">
    <div class="g-toast" ref="parent" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="clear" v-if="closeButton" @click="onLosClick">
      {{ closeButton.text }}
    </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "Toast",
  props: {
    //控制自动关闭
    autoClose: {
      type: [Boolean, Number],
      default: 50,
      validator(value){
        return value === false || typeof value === 'number';
      }
    },
    //控制关闭按钮内容及回调
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    //控制使用html渲染
    enableHtml: {
      type: Boolean,
      default: false
    },
    //控制出现的位置
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }

  },
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]: true}
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.parent.getBoundingClientRect().height}px`

      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.clear()
        }, this.autoClose * 1000)
      }
    },
    clear() {
      this.$el.remove()
      this.$emit('clear')
      this.$destroy()
    },
    onLosClick() {
      this.clear()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)//this === toast实例
      }

    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 12px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up  {
  0%{opacity: 0;transform: translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{opacity: 0;transform: translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    transform: translateX(-50%);
    .g-toast{
      border-top-left-radius: 0;
      border-top-right-radius:0;
      animation: slide-down 1s;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .g-toast{
      animation: slide-in 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    .g-toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius:0;
      animation: slide-up 1s;
    }
  }
}
.g-toast {
  font-size: $font-size;
  background: $toast-bg;
  line-height: 1.8;
  display: flex;
  align-items: center;
  color: white;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;
  border-radius: 4px;

  > .message {
    padding: 8px 0;
  }

  > .clear {
    padding-left: 16px;
    flex-shrink: 0;
  }

  > .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }


}
</style>

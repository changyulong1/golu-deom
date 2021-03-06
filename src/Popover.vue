<template>
  <div class="g-popover" ref="popover">
    <div class="wrapper" :class="{[`position-${position}`]:true}" ref="wrapper" v-if="vsible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: block;">
       <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Popover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0;
      }
    },
    trigger:{
      type:String,
      default:'click',
      validator(value) {
        return ['click','hover'].indexOf(value) >=0
      }
    }
  },
  data() {
    return {
      vsible: false
    };
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else{
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.clear)
    }
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.wrapper);
      const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      const {height: height2} = this.$refs.wrapper.getBoundingClientRect();
      const positions = {
        top: {top: top + scrollTop, left: left + scrollLeft},
        bottom: {top: top + height + scrollTop, left: left + scrollLeft},
        left: {
          top: top + scrollTop + (height - height2) / 2,
          left: left + scrollLeft
        },
        right: {
          top: top + scrollTop + (height - height2) / 2,
          left:left + scrollLeft + width
        }
      };
      this.$refs.wrapper.style.top = positions[this.position].top+'px'
      this.$refs.wrapper.style.left = positions[this.position].left+'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return;
      }
      if (this.$refs.triggerWrapper && (this.$refs.triggerWrapper === e.target || this.$refs.triggerWrapper.contains(e.target))) {
        return;
      }
      this.clear();
    },
    open() {
      this.vsible = !this.vsible;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener('click', this.onClickDocument);
      });
    },
    clear() {
      this.vsible = false;
      document.removeEventListener('click', this.onClickDocument);
    },
    onClick(e) {
      if (this.$refs.triggerWrapper.contains(e.target)) {
        if (this.vsible === true) {
          this.clear();
        } else {
          this.open();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.g-popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.wrapper {
  position: absolute;
  border: 1px solid $border-color;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  border-radius: $border-radius;
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;

  &:before, &:after {
    content: "";
    display: block;
    border: 10px solid transparent;
    position: absolute;
  }

  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &:before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &:after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &:before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }

    &:after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);

    margin-left: -10px;

    &:before, &:after {
      transform: translateY(-50%);
      border-right: none;
      top: 50%;
    }

    &:before {
      border-left-color: black;
      left: 100%;
    }

    &:after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;
    &:before, &:after {
      transform: translateY(-50%);
      border-left: none;
      top: 50%;
    }

    &:before {
      border-right-color: black;
      right: 100%;
    }

    &:after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>

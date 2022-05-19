<template>
  <div class="g-popover" ref="popover" @click="onClick">
    <div class="wrapper" :class="{[`position-${position}`]:true}" ref="wrapper" v-if="vsible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: block;">
       <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Popover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      vsible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.wrapper);
      const {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();

      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      if (this.position === 'top') {
        console.log('top');
        this.$refs.wrapper.style.top = top + scrollTop + 'px';
        this.$refs.wrapper.style.left = left + scrollLeft + 'px';
      } else if (this.position === 'bottom') {
        console.log('bottom');
        this.$refs.wrapper.style.top = top + height + scrollTop + 'px';
        this.$refs.wrapper.style.left = left + scrollLeft + 'px';
      } else if (this.position === 'left') {
        console.log('left');
        const {height: height2} = this.$refs.wrapper.getBoundingClientRect();
        console.log((height2 - height) / 2);
        this.$refs.wrapper.style.top = top + scrollTop + (height - height2) / 2 + 'px';
        this.$refs.wrapper.style.left = left + scrollLeft + 'px';
      }else if(this.position === 'right'){
        console.log('right');
        const {height: height2} = this.$refs.wrapper.getBoundingClientRect();
        console.log((height2 - height) / 2);
        this.$refs.wrapper.style.top = top + scrollTop + (height - height2) / 2 + 'px';
        this.$refs.wrapper.style.left = left+ scrollLeft +width+ 'px';

      }
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
    //left: 10px;
  }

  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);

    &:before {
      border-top-color: black;
      top: 100%;
    }

    &:after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &:before {
      border-bottom-color: black;
      bottom: 100%;
    }

    &:after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &:before, &:after {
      transform: translateY(-50%);
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

<template>
  <div class="g-collapse-time">
    <div class="title" :data-name="name" @click="onClick">
      {{ title }}
    </div>
    <div class="content" ref="content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CollapseTime",
  props: {
    title: {
      type: String,
      readable: true
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      show: false
    };
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (names) => {
      this.show = names.indexOf(this.name) >= 0;
    });
  },
  methods: {
    onClick() {
      if (this.show) {
        this.eventBus.$emit('update:removeSelected', this.name);
      } else {
        this.eventBus.$emit('update:addselected', this.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.g-collapse-time {
  > .title {
    border: 1px solid $border-color;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    align-items: center;
    padding: 10px 8px;
    font-weight: 600;
  }

  &:first-child {
    > .title {
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
      margin-bottom: -1px;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      margin-bottom: -1px;
    }
  }

  > .content {
    padding: 10px;
  }
}

</style>

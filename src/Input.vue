<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <Icon class="icon-error" name="error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "Input",
  components:{Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
//--button-height: 32px;
//--font-size: 14px;
//--button-bg: white;
//--button-active-bg: #eee;
//--border-radius: 4px;
//--color: #333;
//--border-color: #999;
//--border-color-hover: #666;
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red:#f1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  >*:not(:last-child){margin-left: 0.5em;}
  > input {
    height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;
    font-size: initial;
    &:hover {border: 1px solid $border-color-hover;}

    &:focus {box-shadow: inset 0 1px 2px $box-shadow-color;outline: none;}

    &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
  }
  &.error{
    >input{
      border-color: $red;
    }
    >.icon-error{
      fill: $red;
    }
    >.errorMessage{
      color: $red;
    }
  }
}


</style>

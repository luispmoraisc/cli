#!/usr/bin/env node

module.exports = () => {
  return `@function rem($pixels) {
  @return #{$pixels / map_get($fontsize, 'normal')}rem;
}

@mixin mq($width, $type: min) {
  @if map_has_key($breakpoints, $width) {
    $width: map_get($breakpoints, $width);

    @if $type == max {
      $width: $width - 1px;
    }

    @media only screen and (#{$type}-width: $width) {
      @content;
    }
  }
}
  `;
};

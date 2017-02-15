$(document).ready(function() {

  'use strict';

  // Responsive videos

  $('.c-content').fitVids();

  // AnchorJS

  anchors.add('.c-content h3, .c-content h4');

  // Off Canvas menu

  $('.js-off-canvas-toggle').click(function(e) {
    e.preventDefault();
    $('.js-off-canvas-container').toggleClass('is-active');
  });

  // Images Fade In

  $('.js-fadein').viewportChecker({
    classToAdd: 'is-inview',
    offset: 100,
    removeClassAfterAnimation: true
  });
});
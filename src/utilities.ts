export const utilities: CSSBlock = {
  bounce: { transformOrigin: 'center bottom' },
  pulse: { animationTimingFunction: 'ease-in-out' },
  headShake: { animationTimingFunction: 'ease-in-out' },
  swing: { transformOrigin: 'top center' },
  jello: { transformOrigin: 'center' },
  heartBeat: { animationDuration: '1.3s', animationTimingFunction: 'ease-in-out' },
  bounceIn: {
    animationDuration: '0.75s',
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  bounceInDown: { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  bounceInLeft: { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  bounceInRight: { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  bounceInUp: { animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
  bounceOut: { animationDuration: '0.75s' },
  flip: { backfaceVisibility: 'visible' },
  flipInX: { backfaceVisibility: 'visible' },
  flipInY: { backfaceVisibility: 'visible' },
  flipOutX: { animationDuration: '0.75s', backfaceVisibility: 'visible' },
  flipOutY: { animationDuration: '0.75s', backfaceVisibility: 'visible' },
  lightSpeedInRight: { animationTimingFunction: 'ease-out' },
  lightSpeedInLeft: { animationTimingFunction: 'ease-out' },
  lightSpeedOutRight: { animationTimingFunction: 'ease-in' },
  lightSpeedOutLeft: { animationTimingFunction: 'ease-in' },
  rotateIn: { transformOrigin: 'center' },
  rotateInDownLeft: { transformOrigin: 'left bottom' },
  rotateInDownRight: { transformOrigin: 'right bottom' },
  rotateInUpLeft: { transformOrigin: 'left bottom' },
  rotateInUpRight: { transformOrigin: 'right bottom' },
  rotateOut: { transformOrigin: 'center' },
  rotateOutDownLeft: { transformOrigin: 'left bottom' },
  rotateOutDownRight: { transformOrigin: 'right bottom' },
  rotateOutUpLeft: { transformOrigin: 'left bottom' },
  rotateOutUpRight: { transformOrigin: 'right bottom' },
  hinge: {
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    transformOrigin: 'top left',
  },
  zoomOutDown: { transformOrigin: 'center bottom' },
  zoomOutLeft: { transformOrigin: 'left center' },
  zoomOutRight: { transformOrigin: 'right center' },
  zoomOutUp: { transformOrigin: 'center bottom' },
};

export const fineTuneUtils: CSSBlock = {
  '.animate-faster': { animationDuration: '0.5s' },
  '.animate-fast': { animationDuration: '0.8s' },
  '.animate-slow': { animationDuration: '2s' },
  '.animate-slower': { animationDuration: '3s' },

  '.animate-normal': { animationDirection: 'normal' },
  '.animate-reverse': { animationDirection: 'reverse' },
  '.animate-alternate': { animationDirection: 'alternate' },
  '.animate-alternate-reverse': { animationDirection: 'alternate-reverse' },

  '.animate-ease': { animationTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)' },

  '.paused': { animationPlayState: 'paused' },
  '.running': { animationPlayState: 'running' },
};

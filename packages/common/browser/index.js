const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');

export default (Browser) => {
  Browser.register('CommonImageSlider', ImageSlider);
};

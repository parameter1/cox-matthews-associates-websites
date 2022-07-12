<template>
  <div class="premium-employers">
    <div>
      <vue-slick-carousel
        v-bind="SlickCarouselSettings"
        :class="(SlickCarouselSettings.arrows)?'with-arrows':'without-arrows'"
      >
        <a
          v-for="(employer) in employers"
          :key="employer.shortName"
          :href="employer.siteContext.path"
          :title="employer.shortName"
          class="premium-employers__link"
          target="_blank"
          rel="nofollow"
        >
          <img
            class="premium-employers__logo lazyload"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            srcset=""
            :data-src="getImgSrc(employer.primaryImage.src)"
            :data-srcset="[getImgSrcSet(employer.primaryImage.src)]"
            :alt="employer.shortName"
          >
        </a>
      </vue-slick-carousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },

  props: {
    employers: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    SlickCarouselSettings: {
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 1000,
      variableWidth: false,
      dots: false,
      arrows: true,
      focusOnSelect: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    },
  }),

  mounted() {
    const employersCount = this.employers.length;
    const employersPerScroll = this.SlickCarouselSettings.slidesToShow;
    if (employersCount <= employersPerScroll) {
      this.SlickCarouselSettings.autoplay = false;
      this.SlickCarouselSettings.arrows = false;
    }
  },

  methods: {
    getImgSrc(imagePath) {
      return `${imagePath}?auto=format%2Ccompress&bg=fff&dpr=2&fill-color=fff&fit=fill&h=141&pad=5&q=70&w=240`;
    },
    getImgSrcSet(imagePath) {
      return `${imagePath}?auto=format%2Ccompress&bg=fff&dpr=2&fill-color=fff&fit=fill&h=141&pad=5&q=70&w=240&dpr=2 2x`;
    },
  },
};
</script>

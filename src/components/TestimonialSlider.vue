<template>
    <section id="testimonial_slider" class="full_width_info_bar">
        <div class="info_bar_overlay"></div>
        <div class="testimonial_slider" id="testimonial_slider">
            <span class="testimonial_quotes" id="testimonial_open_quote"><svg class="svg-inline--fa fa-quote-left fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg><!-- <i class="fas fa-quote-left"></i> --></span>
            <span class="testimonial_quotes" id="testimonial_closing_quote"><svg class="svg-inline--fa fa-quote-right fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="quote-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg><!-- <i class="fas fa-quote-right"></i> --></span>
            <div class="slides">
                <TestimonialSlide
                    :testimonialName="currentTestimonial.node.acf.client_name"
                    :testimonialText="currentTestimonial.node.acf.testimonial_text"
                >
                </TestimonialSlide>
            </div>
        </div>
    </section>    
</template>

<static-query>
query {
  testimonials: allTestimonial {
    edges {
      node {
        ID
        acf {
          client_name
          testimonial_text
        }
      }
    }
  }
}
</static-query>

<script>
import TestimonialSlide from "~/components/TestimonialSlide.vue";

export default {
  name: 'TestimonialSlider',
  components: {
    TestimonialSlide
  },
  data() {
    return {
      allTestimonials: null,
      currentTestimonial: null
    }
  },
  methods: {
    startTestimonialSlider() {
      let i = 0
      this.currentTestimonial = this.allTestimonials[i]
      setInterval(() => {
        i = (i < this.allTestimonials.length - 1) ? i+1 : 0
        this.currentTestimonial = this.allTestimonials[i]
      }, 5000)
    }

  },
  created() {
    this.allTestimonials = this.$static.testimonials.edges
    this.startTestimonialSlider()
  }
}
</script>
<style lang="sass">

</style>
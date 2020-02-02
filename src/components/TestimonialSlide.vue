<template>
    <div class="testimonial-slider__slide">
        <transition name="slide-fade" mode="out-in">
            <p 
                :key="testimonialText" 
                v-html="testimonialText"
                class="testimonial__text"
            ></p>
        </transition>
        <transition name="slide-up" mode="out-in">
            <p 
                :key="testimonialName" 
                v-html="testimonialName"
                class="testimonial__name"
            ></p>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'TestimonialSlide',
    props: {
        testimonialName: {
            type: String,
            default: ''
        },
        testimonialText: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-up-enter-active {
    animation: slide-up 0.4s ease;
}

.slide-up-leave-active {
     animation: slide-up 0.8s reverse cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
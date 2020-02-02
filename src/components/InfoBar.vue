<template>
    <ul class="feature__list">
        <li 
            v-for="feature in allFeatures"
            :key="feature.sellingFeatureTitle"
            class="feature__item"
            >
            <div 
                v-html="feature.sellingFeatureIcon"
                class="feature__icon">
            </div>
            <h2 
                v-html="feature.sellingFeatureTitle"
                class="feature__title">
            </h2>
            <p 
                v-html="feature.sellingFeatureInfo"
                class="feature__text">
            </p>
        </li>
    </ul>
</template>
<script>

export default {
  name: "InfoBar",
  props: {
      allFeatures: Array,
      classes: String
  }
};
</script>
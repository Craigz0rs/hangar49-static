<template>
    <ul class="feature__list">
        <li 
            v-for="feature in allFeatures"
            :key="feature.sellingFeatureTitle"
            class="feature__item"
        >
            <div class="feature__icon-wrap">
                <font-awesome-icon 
                    :icon="[feature.sellingFeatureIconPrefix, feature.sellingFeatureIconName]"
                    class="feature__icon" 
                >
                </font-awesome-icon>
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
import {
    faFirstAid, 
    faCogs, 
    faHandshake
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faFirstAid, faCogs, faHandshake);

export default {
  name: "InfoBar",
  props: {
      allFeatures: Array,
      classes: String
  }
};
</script>
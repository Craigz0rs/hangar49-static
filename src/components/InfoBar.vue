<template>
    <ul 
        class="feature__list" 
        v-bind:style='{ backgroundImage: "url(" + featureBackground + ")", }'
    >
        <div class="feature__overlay"></div>
        <div class="content-wrapper">
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
        </div>
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
  },
  data() {
    return {
          featureBackground: require("@/assets/images/clouds.jpeg")
    }
  }
};
</script>
<style lang="scss">
.feature {
    &__list {
        min-height: 400px;
        position: relative;
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 50px 115px;
        list-style: none;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;

        @media screen and (max-width: 1220px) {
            padding: 50px 25px;
        }

        @media screen and (max-width: 865px) {
            flex-wrap: wrap;
            padding: 50px 0px;
        }
    }

    &__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(45,45,45,0.9);
    }

    &__icon-wrap {
        color: $color_footer-headings;
        font-size: 60px;
        padding-bottom: 17px;

        @media screen and (max-width: 865px) {
            border-top: 1px solid #75736f;
            margin: 0 auto;
            width: 200px;
            padding-top: 25px;
        }
    }

    &__item {
        margin: 0 25px;
        text-align: center;
        width: 400px;
        z-index: 99;

        @media screen and (max-width: 865px) {
            width: 100%;
            padding-bottom: 20px;

            &:nth-of-type(1) {
                .feature__icon-wrap {
                    border-top: none;
                    padding-top: 0;
                }
            }
        }
    }

    &__title {
        padding-bottom: 5px;
        font-size: 1.9rem;
        background-color: transparent;
        color: $color_font-nav-hover;
        font-family: "Jura", sans-serif;

        @media screen and (max-width: 865px) {
            max-width: 300px;
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }

    &__text {
        color: $color_footer-headings;

        @media screen and (max-width: 865px) {
            max-width: 445px;
            margin: 0 auto;
            margin-bottom: 22px;
        }
    }
}
</style>
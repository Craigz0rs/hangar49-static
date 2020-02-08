<template>
  <Layout>
    <g-image 
      :src="$page.fields.featuredMedia.sourceUrl"
      blur="40"
      class="home__hero-image"
    >
    </g-image>
    <div class="home__wrapper">
      <TheHomeHero
        :headline="$page.fields.acf.headline"
        :introText="$page.fields.acf.introText"
      >
      </TheHomeHero>
      <div class="home__wrapper--white">
      <section class="home__services info-bar">
        <InfoBar
          :allFeatures="$page.fields.acf.sellingFeatures"
        >
        </InfoBar>
      </section>
      <section class="home__latest-inventory" id="home_inventory_section">
        <div class="content-wrapper page_main_wrapper" id="home_main_wrapper">
          <div class="home__latest-inventory-wrapper latest_wrapper">
            <InventoryList
              :inventoryList="$page.inventory.edges"
            >
            </InventoryList>  
            <div id="home_inventory_splash">
              <div id="home_inventory_splash_overlay"></div>
              <div id="home_inventory_splash_overlay2"></div>
            </div>
          </div>
        </div>
      </section> 
      <TestimonialSlider/>
      </div>          
    </div>
  </Layout>
</template>

<page-query>
query {
  inventory: allInventory(sortBy: "post_date", order: DESC, limit: 3) {
    edges {
      node {
        ID   
        post_date
        acf {
          sale_info
          inventory_aircraft {
            ID
          }
          featured_image {
            url
            alt
          }
          coming_soon
          price_reduced    
        } 
      }
    }
  }
  aircraft: allAircraft {
    edges {
      node {
        path
				ID
        acf {
          manufacture_year
          manufacturer
          model
        }
      }
    }
  }
  fields: wordPressPage(id: "13") {
    featuredMedia {
      sourceUrl
    }
    acf {
      headline
      introText
      sellingFeatures {
        sellingFeatureTitle
        sellingFeatureInfo
        sellingFeatureIconPrefix
        sellingFeatureIconName
      }
    }
  }
}
</page-query>

<script>
import TheHomeHero from "~/components/TheHomeHero.vue";
import TestimonialSlider from "~/components/TestimonialSlider.vue";
import InfoBar from "~/components/InfoBar.vue";
import InventoryList from "~/components/InventoryList.vue";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    TestimonialSlider,
    TheHomeHero,
    InfoBar,
    InventoryList
  },
  data() {
    return {
      allAircraft: null,
    }
  },
  methods: {
    getAircraft(id) {
      if(id) {
        let aircraft = this.allAircraft.filter(obj => {
            return obj.node.ID == id
        })
        if (aircraft && aircraft[0]) {
          return aircraft[0].node
        }
      }
    },
    getManufacturer(id) {
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.manufacturer) {
          return aircraft.acf.manufacturer
        }
      }
    },
    getYear(id) {
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.manufacture_year) {
          return aircraft.acf.manufacture_year
        }
      }
    },
    getModel(id) {
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.model) {
          return aircraft.acf.model
        }
      }
    },
    getPath(id) {
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.path) {
          return aircraft.path
        }
      }
    }

  },
  created() {
    this.allAircraft = this.$page.aircraft.edges
  }
}

</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.home {
  &__hero-image {
    position: fixed;
    object-fit: cover;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &__wrapper {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    background-position: bottom;
    z-index: 10;

    &--white {
      background: $color_background_main;
    }
  }
}
</style>

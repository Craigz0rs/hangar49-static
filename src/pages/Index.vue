<template>
  <Layout>
    <g-image :src="require('~/assets/images/background-min.jpg')" blur="40"></g-image>
    <div class="home__wrapper">
      <TheHomeHero
        :headline="$page.fields.acf.headline"
        :introText="$page.fields.acf.introText"
      >
      </TheHomeHero>
      <section class="home__services info-bar">
        <div class="content-wrapper">
          <InfoBar
            :allFeatures="$page.fields.acf.sellingFeatures"
          >
          </InfoBar>
        </div>
      </section>
      <section class="home__latest-inventory" id="home_inventory_section">
        <div class="content-wrapper page_main_wrapper" id="home_main_wrapper">
          <div class="home__latest-inventory-wrapper latest_wrapper">
            <div class="home_latest_list" id="home_latest_inventory">
              <h2 class="detail_section_title">Newest Inventory</h2>
              <article 
                v-for="edge in $page.inventory.edges" 
                :key="edge.node.ID"
                class="home_list_item home_latest_aircraft_item inventory_listing" 
              >
                <div 
                  v-if="edge.node.acf.featured_image"
                  class="list_item_image"
                >
                  <g-image
                    :src="edge.node.acf.featured_image.url" 
                    blur="40"
                  />
                </div>
                <div class="list_item_info">
                  <div class="list_item_overlay"></div>
                  <div class="list_item_overlay2"></div>
                  <div class="article_excerpt_title">
                    <h1 class="entry-title">
                      <g-link 
                        :to="getPath(edge.node.acf.inventory_aircraft[0].ID)"
                      >
                        {{getYear(edge.node.acf.inventory_aircraft[0].ID)}} 
                        {{getManufacturer(edge.node.acf.inventory_aircraft[0].ID)}} 
                        {{getModel(edge.node.acf.inventory_aircraft[0].ID)}}
                      </g-link>
                    </h1>
                    <div class="list_item_pitch">
                      <p>{{edge.node.acf.sale_info}}</p>
                    </div>
                    <footer class="list_item_footer">
                      <div class="list_item_meta">
                        <p v-if="edge.node.acf.coming_soon">COMING SOON</p>
                        <p v-if="edge.node.acf.price_reduced">PRICE REDUCED</p>
                      </div>
                      <div class="article_read_more">
                        <g-link :to="getPath(edge.node.acf.inventory_aircraft[0].ID)">learn more</g-link>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </div>
            <div id="home_inventory_splash">
              <div id="home_inventory_splash_overlay"></div>
              <div id="home_inventory_splash_overlay2"></div>
            </div>
          </div>
        </div>
      </section> 
      <TestimonialSlider/>          
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
    acf {
      headline
      introText
      sellingFeatures {
        sellingFeatureIcon,
        sellingFeatureTitle,
        sellingFeatureInfo
      }
    }
  }
}
</page-query>

<script>
import TheHomeHero from "~/components/TheHomeHero.vue";
import TestimonialSlider from "~/components/TestimonialSlider.vue";
import InfoBar from "~/components/InfoBar.vue";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    TestimonialSlider,
    TheHomeHero,
    InfoBar
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
  &__wrapper {
    min-height: 100vh;
    width: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    background-position: bottom;
  }
}
</style>

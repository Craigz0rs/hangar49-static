<template>
  <Layout>
    <div class="home__wrapper">
      <section class="home__hero">
        <div class="content__wrapper">
          <div class="home__intro">
            <h1 class="home__title">Hangar 49<br><span>Warbirds</span></h1>
            <h2 class="home__headline" v-html="$page.fields.acf.headline"></h2>
            <p class="home__blurb" v-html="$page.fields.acf.introText"></p>
          </div>
        </div>
      </section>
      <section class="home__services info-bar">
        <div class="content-wrapper">
          <ul class="home__services-list feature__list">
            <li v-for="feature in $page.fields.acf.sellingFeatures"
                class="home__services-item feature__item">
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
        </div>
      </section>
      <section class="home__latest-inventory" id="home_inventory_section">
        <div class="content-wrapper page_main_wrapper" id="home_main_wrapper">
          <div class="home__latest-inventory-wrapper latest_wrapper">
            <div class="home_latest_list" id="home_latest_inventory">
              <h2 class="detail_section_title">Newest Inventory</h2>
              <article class="home_list_item home_latest_aircraft_item inventory_listing" v-for="edge in $page.inventory.edges" :key="edge.node.ID">
                <div v-if="edge.node.acf.featured_image" class="list_item_image">
                  <g-image :src="edge.node.acf.featured_image.url" blur="40"/>
                </div>
                <div class="list_item_info">
                  <div class="list_item_overlay"></div>
                  <div class="list_item_overlay2"></div>
                  <div class="article_excerpt_title">
                    <h1 class="entry-title">
                      <a href="#">
                        {{getYear(edge.node.acf.inventory_aircraft[0].ID)}} 
                        {{getManufacturer(edge.node.acf.inventory_aircraft[0].ID)}} 
                        {{getModel(edge.node.acf.inventory_aircraft[0].ID)}}
                      </a>
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
                        <g-link :to="getPath(edge.node.acf.inventory_aircraft[0].ID)">{{currentTest}}</g-link>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </div>
            <div id="home_inventory_splash">

            </div>
            
          </div>
        </div>
      </section>              
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
  posts: allWordPressPost {
    edges {
      node {
        path
        slug
        title
        date
        id
        excerpt
        featuredMedia {
          sourceUrl
          altText
          id

        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      allAircraft: null,
      currentTest: "poop",
      currentAircraft: null,
      currentYear: null,
      currentManufacturer: null,
      currentModel: null,
      currentPath: null,
    }
  },
  methods: {
    getAircraft(id) {
      let node
      let aircraft
      if(id) {
        let aircraft = this.allAircraft.filter(obj => {
            return obj.node.ID == id
        })
        if (aircraft && aircraft[0]) {
          node = aircraft[0].node
        }
      }
      return node
    },
    getManufacturer(id) {
      let result
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.manufacturer) {
          result = aircraft.acf.manufacturer
        }
      }
      return result
    },
    getYear(id) {
      let result
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.manufacture_year) {
          result = aircraft.acf.manufacture_year
        }
      }
      return result
    },
    getModel(id) {
      let result
      if(id) {
        let aircraft = this.getAircraft(id)
        if(aircraft && aircraft.acf.model) {
          result = aircraft.acf.model
        }
      }
      return result
    },
    getPath(id) {
    let result
      if(id) {
        let aircraft = this.getAircraft(id)
        
        if(aircraft && aircraft.path) {
          result = aircraft.path
        }
      }
      return result
    }

  },
  created() {
    this.allAircraft = this.$page.aircraft.edges

    

    let aircraft = this.allAircraft.filter(obj => {
      return obj.node.ID == 64
    })
    // console.log(aircraft)
    // let result = this.allAircraft.filter(obj => {
    //   return obj.node.ID === 64
    // })
    // console.log(result[0].node.acf.model)
    // console.log(this.allAircraft[0].node.ID)
    // this.stuff = this.$page.fields.acf.siteIntro;
    // console.log(this.stuff)
    // let i = 0;
    // while ( i < this.allAircraft.length) {

    //   i ++
    // }
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

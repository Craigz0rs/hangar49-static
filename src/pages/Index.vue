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
      <section class="home__latest-inventory">
        <div class="content-wrapper">
          <div class="home__latest-inventory-wrapper">
            <h2 class="detail_section_title">Newest Inventory</h2>
            <article class="list-item">
              <div class="list-item__image-wrap">
                <img class="list-item__image" src="" alt="" />
              </div>
            </article>
          </div>
        </div>
      </section>
                            
    </div>
  </Layout>
</template>

<page-query>
query {
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
    allInventory {
    edges {
      node {     
        acf {
          featured_image {
            url
            alt
          }
          coming_soon
          price_reduced
          inventory_aircraft {
            ID 
          }         
        } 
      }
    }
  }
  allAircraft {
    edges {
      node {
        ID
        acf {
          manufacture_year
          manufacturer
          model
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
      // stuff: null,
      // headline: null,
      // introText: null
    }
  },
  created() {
    // this.stuff = this.$page.fields.acf.siteIntro;
    // console.log(this.stuff)
    // let i = 0;
    // while ( i < this.stuff.length) {
    //   this.headline = this.stuff[i].headline;
    //   this.introText = this.stuff[i].introText;
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

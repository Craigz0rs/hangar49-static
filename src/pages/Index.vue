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
          <ul class="home__services-list">
            
          </ul>
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

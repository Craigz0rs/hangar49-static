<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
<!-- 
    <p>{{$page.fields.acf.siteIntro}}</p> -->
    <!-- <div v-for="field in stuff">
      <h1> {{ field.headline }} </h1>
      <h2> {{ field.introText }} </h2>
    </div> -->

      <h3> {{headline}} </h3>
      <h4> {{introText}} </h4>
      <!-- <p>{{stuff}}</p> -->



    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query {
  fields: wordPressPage(id: "13") {
    acf {
      siteIntro {
        headline
        introText
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
      stuff: null,
      headline: null,
      introText: null
    }
  },
  computed: {
    acf() {
      this.headline = "blah"
      for (let field in this.stuff) {
         return this.headline = field.headline
        // this.introText = field.introText
      }
    }
  },
  created() {
    // console.log(this.$page.fields.acf.siteIntro);
    this.stuff = this.$page.fields.acf.siteIntro;
    // this.acf
      for(let field in this.$page.fields.acf.siteIntro) {
        console.log(typeof(field));
        this.headline = this.$page.fields.acf.siteIntro[0].headline;
        this.introText = this.$page.fields.acf.siteIntro[0].introText;
      }
    }
  }

</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

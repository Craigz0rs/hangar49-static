<template>
    <section class="home__hero">
        <div class="content__wrapper">
            <div class="home__intro">
            <h1 class="home__title">Hangar 49<br><span>Warbirds</span></h1>
            <h2 class="home__headline" v-html="headline"></h2>
            <p class="home__blurb" v-html="introText"></p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'TheHomeHero',
    props: {
        headline: String,
        introText: String
    }
}
</script>
<style lang="scss">
.home {
  &__hero {
    position: relative;
    min-height: 100vh;
    padding: 0;
  }

  &__intro {
    position: relative;
    text-align: center;
    color: white;
    padding-top: 19vh;
    z-index: 1;
  }

  &__title {
      font-size: 3em;
      margin-bottom: 0px;
      font-family: $font_logo;   

      > span {
        font-size: 2.5em;
        margin-top: -27px;
      }
  }

  &__headline {
      font-size: 1em;
      font-family: 'Jura', sans-serif;
      padding: 10px 0;
      font-weight: 900;
      margin-bottom: 90px;
  }

  &__blurb {
      font-family: $font_text;
      font-size: 0.7em; 
      max-width: 450px;
      margin: 0 auto;
      padding: 0 25px;
  }
}
</style>
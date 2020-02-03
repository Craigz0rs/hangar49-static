<template>
    <section class="home__hero">
        <div class="content__wrapper">
            <div class="home__intro">
            <h1 class="home__title">Hangar 49<br><span>Warbirds</span></h1>
            <h2 class="home__headline" v-html="headline"></h2>
            <p class="home__blurb" v-html="introText"></p>
            </div>
        </div>
        <div class="page-header__overlay home__hero-overlay"></div>
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
    padding-top: 10%;
    z-index: 1;
  }

  &__title {
      font-size: 3rem;
      margin-bottom: 0px;
      font-family: $font_logo;

    > span {
        display: block;
        font-size: 2.5rem;
        margin-top: -27px;
      }

    @media screen and (min-width: 700px) {
        font-size: 4rem;

        > span {
            font-size: 3.33rem;
            margin-top: -34px;
        }
      }

      @media screen and (min-width: 1024px) {
        font-size: 6rem;
        margin-bottom: 0px;

        > span {
            font-size: 5rem;
            margin-top: -52px;  
        }
      }
  }

  &__headline {
      font-size: 1rem;
      font-family: 'Jura', sans-serif;
      padding: 10px 0;
      font-weight: 900;
      margin-bottom: 90px;

      @media screen and (min-width: 700px) {
          font-size: 1.5rem;
      }

      @media screen and (min-width: 1024px) {
            font-size: 2rem;
      }
  }

  &__blurb {
      font-family: $font_text;
      font-size: 0.7rem; 
      max-width: 450px;
      margin: 0 auto;
      padding: 0 25px;

      @media screen and (min-width: 700px) {
          font-size: 1rem;
      }
  }

  &__hero-overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.81) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,0.1) 60%,rgba(0,0,0,0.81) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 30%,rgba(0,0,0,0.1) 60%,rgba(0,0,0,0.81) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cf000000',GradientType=0 ); /* IE6-9 */
        background-color: rgba(0,0,0,0.2);
    
  }
}
</style>
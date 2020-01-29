<template>
  <section class="info-bar">
    <div class="projects__list">
      <InfoBarItem

      />
    </div>
  </section>
</template>
<script>
import InfoBarItem from "./InfoBarItem.vue";

export default {
  name: "InfoBar",
  components: {
    InfoBarItem
  }
};
</script>
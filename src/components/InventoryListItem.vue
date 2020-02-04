<template>
    <article class="home_list_item home_latest_aircraft_item inventory_listing"> 
        {{featuredImage}}
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
                <!-- <g-link 
                :to="getPath(edge.node.acf.inventory_aircraft[0].ID)"
                >
                {{getYear(edge.node.acf.inventory_aircraft[0].ID)}} 
                {{getManufacturer(edge.node.acf.inventory_aircraft[0].ID)}} 
                {{getModel(edge.node.acf.inventory_aircraft[0].ID)}}
                </g-link> -->
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
                <!-- <g-link :to="getPath(edge.node.acf.inventory_aircraft[0].ID)">learn more</g-link> -->
                </div>
            </footer>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    name: "InventoryListItem",
    props: {
        edge: Object,
        airplane: Number,
        aircraft: Object,
        featuredImage: Object

    },
    data() {
        return {
            model: null,
            manufacturer: null,
            year: null,
            path: null,
            imageUrl: null
        }
    },
    created() {
        if (this.aircraft) {
            console.log("aircraft exists")
           this.path = this.aircraft.path
           if (this.aircraft.acf != undefined) {
               this.manufacturer = this.aircraft.acf.manufacturer
               this.model = this.aircraft.acf.model
               this.year = this.aircraft.acf.manufacture_year
                if (this.aircraft.acf.featured_image) {
                    this.imageUrl = this.aircraft.acf.featured_image.url
                }
           }
        }
    }
}
</script>
<style lang="scss">

</style>
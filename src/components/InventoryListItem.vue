<template>
    <article class="home_list_item home_latest_aircraft_item inventory_listing"> 
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
                    :to="path"
                >
                    {{year}} {{manufacturer}} {{model}}
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
                    <g-link :to="path">learn more</g-link>
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
.inventory_listing {
    position: relative;
    display: flex;
    height: 200px;
    overflow: hidden;
    margin-bottom: 5px;
    
    .article_excerpt_title {
        padding: 10px 25px 10px 45px;
        border-bottom: 2px solid $color_background_main;
        position: relative;
        z-index: 2;
        
        .entry-title {
            text-align: right;
            
            a {
                font-size: 25px;
            }
        }
    }
}

.list_item_image {
    width: 40%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.list_item_info {
    position: relative;
    width: 60%;
    border-top: 5px solid $color_dark-backgrounds;
    background-color: white;
    
    p {
        margin: 0;
    }
}

.list_item_overlay {
    background-color: $color_dark-backgrounds;
    position: absolute;
    width: 307px;
    height: 40px;
    transform-origin: top left;
    transform: rotate(107deg) translateX(-45px) translateY(-37px);
    border-bottom: 5px solid $color_background_main;
    z-index: 4;
}
.list_item_overlay2 {
    background-color: white;
    position: absolute;
    width: 220px;
    height: 40px;
    transform-origin: top left;
    transform: rotate(107deg) translateX(-11px) translateY(-76px);
    z-index: 1;
}

.list_item_pitch {
    position: relative;
    z-index: 2;
    padding: 5px 25px 0 40px;
    font-size: 14px;
    text-align: right;
}

.list_item_serial_reg {
    position: relative;
    display: flex;
    z-index: 2;
}

.list_item_footer {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 105%;
    height: 50px;
    padding: 4px 10px 4px 25px;
    border-top: 2px solid $color_background_main;
    background-color: white;
    z-index: 2;
    
    .article_read_more a {
        padding: 5px 15px;
    }
}

.list_item_meta {
    flex-grow: 100;
    padding-top: 5px;
}

.list_item_status {
    color: $color_font-dark-text;
    font-size: 19px;
    text-align: center;
}

.price_reduced,
.new_listing {
    color: red;
}

@media screen and (max-width: 1400px) {
    .inventory_listing .article_excerpt_title .entry-title a {
        font-size: 23px;
    }
}

@media screen and (max-width: 680px) {
    .inventory_listing {
        height: auto;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    
    .list_item_image {
        width: 100%;
        height: 250px;
        margin-bottom: 5px;
    }
    
    .list_item_info {
        width: 100%;
        border: none;
        z-index: 5;
    }
    
    .list_item_overlay {
        width: 600px;
        height: 300px;
        transform-origin: bottom left;
        transform: rotate(-73deg) translateX(30px) translateY(-66px);
        border: none;
    }
    
    .list_item_overlay2 {
        width: 600px;
        transform-origin: bottom left;
        z-index: 2;
        transform: rotate(-73deg) translateX(-150px) translateY(16px);
    }
    
    .inventory_listing .article_excerpt_title {
        z-index: 5;
        border-top: 5px solid #5E5E5E;
        background-color: white;
    }
    
    .inventory_listing .article_excerpt_title .entry-title {
        text-align: left;
    }
    
    .list_item_pitch {
        z-index: 5;
        padding: 5px 25px 5px 45px;
        text-align: left;
        background-color: white;
    }
    
    .list_item_footer {
        position: relative;
        height: auto;
        width: 100%;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 600px) {
    .list_item_footer {
        padding-left: 45px;
    }
    
    .list_item_status {
        text-align: left;
    }
    
    .list_item_footer .article_read_more {
        margin-top: 0;
    }
}

@media screen and (max-width: 400px) {
    .inventory_listing .article_excerpt_title {
        padding: 10px 20px;
    }
    
    .list_item_pitch {
        padding: 5px 20px;
    }
    
    .list_item_footer {
        padding: 5px 20px;
    }
    
    .list_item_status {
        font-size: 18px;
    }
}
</style>
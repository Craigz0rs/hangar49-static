<template>
   <div class="inventory__list" id="home_latest_inventory">
        <h2 class="inventory__title">Newest Inventory</h2>
        <InventoryListItem
            v-for="edge in inventoryList" 
            :key="edge.node.ID"
            :edge="edge"
            :airplane="edge.node.acf.inventory_aircraft[0].ID"
            :aircraft="getAircraft(edge.node.acf.inventory_aircraft[0].ID)"
            :featuredImage="edge.node.acf.featured_image"
        >
        </InventoryListItem>
        {{this.allAircraft}}
    </div> 
</template>
<static-query>
query {
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
}
</static-query>
<script>
import InventoryListItem from "~/components/InventoryListItem.vue"

export default {
    name: "InventoryList",
    components: {
        InventoryListItem
    },
    props: {
        inventoryList: Array
    },
    data() {
        return {
            allAircraft: null,
        }
    },
    created() {
        this.allAircraft = this.$page.aircraft.edges
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
        }
    }
}
</script>
<style lang="scss">

</style>
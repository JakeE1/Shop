<template>
    <div class="product-tile">
        <v-img
            :src="product.small_image.url"
            class="product-tile__image"
            aspect-ratio=".85"
            containmin-height="300"
            >
            <template v-slot:placeholder>
                <v-row class="fill-height ma-9" align="center" justify="center">
                    <v-progress-circular
                        indeterminate
                        color="black"
                    >
                    </v-progress-circular>    
                </v-row>
            </template>
            <v-row align="end" class="Lightbox white--text pa-2 fill-height" >
                <v-col style="background: rgba(255, 255, 255, .55)">
                    <div class="black--text text-center">
                        <strong>{{ product.naame }}</strong>
                    </div>
                </v-col>
            </v-row>
        </v-img>
        <div class="product-title__actions">
            <v-btn block color="red" @click.prevent="submit"></v-btn>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import BaseProduct from '~/components/catalog/category/_Base'

export default {
    extends: BaseProduct,
    methods: {
        ...mapActions({
            addProductToCart: 'cart/addSimpleProductToCart'
        })
    }
}
</script>
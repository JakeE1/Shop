<template>
	<v-list dense>
    <v-list-item 
		v-for="(item, index) in categoryTree"
		:key="index"
		nuxt
		:to="{ path: `/${item.url_path}${storeConfig.category_url_suffix}`}" exact
    >
        <v-list-item-content>
        <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
	</v-list>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		...mapGetters({
			storeConfig: 'storeConfig',
			categoryTree: 'category/tree'
		})
	}
}
</script>
    

<template>
	<div>
		<v-container v-if="categoryData">
			<v-row>
				<v-col>
					<h1>Title</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col v-for="product in categoryData.products.items"
				:key="product.sku"
				cols="12"
				sm="6"
				md="4"
				xl="3"
				> 
				<component :is="product.__typename" :product="product" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/getCategory.graphql'

export default {
	components: {
		SimpleProduct: () => ({
			component: import('~/components/catalog/category/Simple'),
		}),
		ConfigurableProduct: () => ({
			component: import('~/components/catalog/category/Configurable'),
		}),
		DownloadableProduct: () => ({
			component: import('~/components/catalog/category/Downloadable'),
		}),
		GroupedProduct: () => ({
			component: import('~/components/catalog/category/Grouped'),
		}),
		BundleProduct: () => ({
			component: import('~/components/catalog/category/Bundle'),
		}),
	},
	props: {
		id: {
			type: Number,
			required: true
		},
	},	
	data() {
		return {
			page: 1,
			pageSize : 12,
			isFirstCollectionLoaded: false,
			productListSort: {
				name: 'ASC'
			},
		}
	},
	apollo: {
		categoryData: {
			query: categoryQuery,
			variables() {
				return {
						id: this.id,
						pageSize: this.pageSize,
						currentPage: this.page,
						filters: { category_id: { in: this.id } },
						sort: this.productListSort,
				}
			},
			update(data) {
				return data
			},
		}
	}	
}
</script>
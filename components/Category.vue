<template>
	<div>
		<v-container v-if="categoryData">
			<v-row>
				<v-col>
					<h1>Title</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col> Products </v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import categoryQuery from '~/apollo/queries/category/getCategory.graphql'

export default {
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
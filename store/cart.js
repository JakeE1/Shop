import * as types from '~/mutation-types'
import getCartDetailQuery from '~/apollo/queries/cart/getCartDetails.graphql'
import createCartMutation from '~/apollo/mutations/cart/createCart.graphql'

// STATE
export const state = () => ({
  cartId: '',

  cartData: {},

  isLoading: false, 
})
// GETTERS
export const getters = {}
// MUTATION - sync (commit)
export const mutations = {
  [types.SET_CART_ID] (state, payload) {
	  state.cartId = payload
  },
  [types.SET_CART_DATA] (state, payload) {
	state.cartData = Object.assign({}, payload)
},
}
// ACTION - async (dispatch)
export const actions = {
  async initCart({ dispatch, commit }) {
	  const quoteId = this.$cookies.get('cartId')

	  if (quoteId) {
		  dispatch('setCartId', { cartId: quoteId })
	  } else {
		  try {
			  const {
				  data: { cartId },
			  } = await this.app.apolloProvider.defaultClient.mutate({ 
				  mutation: createCartMutation,
			 })
			 if (cartId) {
				 dispatch('setCartId', { cartId })
			 }
			} catch (e) {
				console.error(e)
			}
		}
	},
	setCartId({ commit }, { cartId }) {
		this.$cookies.set('cartId', cartId, {
			path: '/',
			maxAge: 60 * 60 *24 *7,
		})
		commit(types.SET_CART_ID, cartId)
	},
	async updateData({ commit, state }) {
		try {
			const {
				data: { cart },
			} = await this.app.apolloProvider.defaultClient.query({ 
				query: getCartDetailQuery,
				variables: {
					cartId: state.cartId 
				}
			})
			if (cart) {
				commit(types.SET_CART_DATA, cart)
			}
		} catch (e) {
				console.error(e)
			}
	},
	async addSimpleProductToCart({ commit, dispatch, state }, payload) {
		try {
			const {
				data: { addSimpleProductsToCart: { cart } },
			} = await this.app.apolloProvider.defaultClient.mutate({ 
					mutation: null,
					variables: {
						cartId: state.cartId,
						quantity: payload.qty,
						sku: payload.sku 
					},	
				})
				if (cart) {
					commit(types.SET_CART_DATA, cart)
				}
			}
		 	catch(e) {
			console.log(e)
		}
		 
	},
}
  


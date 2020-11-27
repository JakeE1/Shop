<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addProductToCart () {},
        submit () {
            this.addProductToCart({ qty: 1, sku: this.product.sku })
        }
    }
}

</script>
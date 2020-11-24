<template>
  <component :is="type" :id="id"></component>
</template>

<script>
export default {
  components: {
    category: () => ({
      component: import('@/components/magento/Category'),
    }),
    product: () => ({
      component: import('@/components/magento/Product'),
    }),
    cms_page: () => ({
      component: import('@/components/magento/CmsPage'),
    }),
  },
  async asyncData(ctx) {
    return {
        type: ctx.urlResolver.type,
        id: ctx.urlResolver.id
    }
  },
  methods: {
    setCurrentCategoryData() {},
  },
}
</script>
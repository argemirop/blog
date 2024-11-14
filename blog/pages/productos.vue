<template>
    <h1>Principal</h1>
    <Products  />    
</template>
<script setup>
  // Instanciar el store
  const productStore = useProductStore()
  

  await useAsyncData('products', async () => {
    await productStore.fetchProducts()    
  })
  
</script>
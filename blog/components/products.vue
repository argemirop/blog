<template>
    <div>
        <h1>Productos</h1>
        <div v-if="getProducts.length">
            <ul >
                <li v-for="product in getProducts" :key="product.id">
                <h2>{{ product.title }}</h2>
                <p>{{ product.description }}</p>
                <strong>{{ product.price }} USD</strong>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script setup>
    // Instanciar el store
  const productStore = useProductStore()
  
  // Obtener los productos
  const { getProducts } = productStore;

</script>
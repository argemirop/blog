<template>
  <v-card>
    <v-toolbar color="deep-purple-accent-4">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Productos</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- Pestañas de las secciones -->
    <v-tabs v-model="currentSection" fixed-tabs>
      <v-tab value="inicio">Inicio</v-tab>
      <v-tab value="categorias">Categorías</v-tab>
      <v-tab value="sugerencias">Sugerencias</v-tab>
      <v-tab value="articulos">Artículos</v-tab>
      <v-tab value="admin">Panel de Administración</v-tab>
    </v-tabs>

    <!-- Contenido de las pestañas -->
    <v-tabs-window v-model="currentSection">
      <v-tabs-window-item value="inicio">
        <v-card flat>
          <v-card-text>
            <h2>Inicio</h2>
            <p>Bienvenido a la sección de inicio.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="categorias">
        <v-card flat>
          <v-card-text>
            <h2>Categorías</h2>
            <p>Aquí puedes ver y explorar las categorías de productos.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="sugerencias">
        <v-card flat>
          <v-card-text>
            <h2>Sugerencias</h2>
            <p>Encuentra sugerencias de productos personalizados.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="articulos">
        <v-card flat>
          <v-card-text>
            <h2>Artículos</h2>
            <p>Explora artículos relevantes sobre nuestros productos.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="admin">
        <v-card flat>
          <v-card-text>
            <h2>Panel de Administración</h2>
            <p>Administra los productos y la configuración del sistema.</p>
          </v-card-text>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'inicio',  // Sección inicial
    };
  }
};
</script>

// Definición de las interfaces
interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface Categoria {
  id: number;
  name: string;
}

interface Sugerencia {
  id: number;
  title: string;
  price: number;
}

interface Articulo {
  id: number;
  title: string;
  content: string;
}

interface Setting {
  id: number;
  name: string;
  status: string;
}

interface SectionData {
  inicio: { title: string; description: string };
  categorias: { title: string; description: string; categories: Categoria[] };
  sugerencias: { title: string; description: string; suggestions: Sugerencia[] };
  articulos: { title: string; description: string; articles: Articulo[] };
  admin: { title: string; description: string; settings: Setting[] };
}

// Definición del store
export const useProductStore = defineStore({
  id: "productos",
  state: () => ({
    sections: {} as SectionData,
    currentProduct: {} as Producto,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getInicio: (state) => state.sections.inicio,
    getCategorias: (state) => state.sections.categorias,
    getSugerencias: (state) => state.sections.sugerencias,
    getArticulos: (state) => state.sections.articulos,
    getAdmin: (state) => state.sections.admin,
  },
  actions: {
    async fetchSections() {
      try {
        const sections = await $fetch("/api/productos");
        this.sections = sections;
      } catch (error) {
        console.error("Error al obtener las secciones:", error);
      }
    },
    setProduct(product: Producto) {
      this.currentProduct = product;
    },
  },
});


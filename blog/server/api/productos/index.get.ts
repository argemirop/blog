export default defineEventHandler(async (event) => {
    const sections = {
      inicio: {
        title: 'Inicio',
        description: 'Bienvenido a la sección de inicio. Aquí encontrarás información destacada sobre nuestros productos.',
      },
      categorias: {
        title: 'Categorías',
        description: 'Explora las diferentes categorías de productos que ofrecemos.',
        categories: [
          { id: 1, name: 'Electrónica' },
          { id: 2, name: 'Ropa' },
          { id: 3, name: 'Hogar' },
        ]
      },
      sugerencias: {
        title: 'Sugerencias',
        description: 'Productos recomendados para ti.',
        suggestions: [
          { id: 101, title: 'Producto sugerido 1', price: 150 },
          { id: 102, title: 'Producto sugerido 2', price: 250 },
        ]
      },
      articulos: {
        title: 'Artículos',
        description: 'Artículos y recursos interesantes sobre nuestros productos.',
        articles: [
          { id: 201, title: 'Cómo elegir el mejor producto', content: 'Contenido del artículo 1...' },
          { id: 202, title: 'Consejos para ahorrar en tus compras', content: 'Contenido del artículo 2...' },
        ]
      },
      admin: {
        title: 'Panel de Administración',
        description: 'Administra tus productos y configuraciones aquí.',
        settings: [
          { id: 301, name: 'Configurar impuestos', status: 'activo' },
          { id: 302, name: 'Administrar inventario', status: 'pendiente' },
        ]
      }
    };
  
    // Retorna los datos de las secciones
    return sections;
  });
  
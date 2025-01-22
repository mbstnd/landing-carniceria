export interface ProductItem {
  name: string
  image: string
}

export interface Product {
  id: string
  title: string
  description: string
  image: string
  items: ProductItem[]
}

export const products: Product[] = [
  {
    id: "vacuno",
    title: "Vacuno",
    description: "Los mejores cortes de carne vacuna seleccionados",
    image: "/img/products/vacuno.webp",
    items: [
      { name: "Lomo", image: "/img/products/items/vacuno/lomo.jpg" },
      { name: "Costilla", image: "/img/products/items/vacuno/costilla.jpg" },
      { name: "Bife", image: "/img/products/items/vacuno/bife.jpg" },
      { name: "Asado", image: "/img/products/items/vacuno/asado.jpg" },
    ],
  },
  {
    id: "cerdo",
    title: "Cerdo",
    description: "Cortes frescos de cerdo de primera calidad",
    image: "/img/products/cerdo.webp",
    items: [
      { name: "Chuleta", image: "/img/products/items/cerdo/chuleta.jpg" },
      { name: "Costilla", image: "/img/products/items/cerdo/costilla.jpg" },
      { name: "Panceta", image: "/img/products/items/cerdo/panceta.jpg" },
      { name: "Bondiola", image: "/img/products/items/cerdo/bondiola.jpg" },
    ],
  },
  {
    id: "ave",
    title: "Ave",
    description: "Aves frescas y procesadas",
    image: "/img/products/pollo.webp",
    items: [
      {
        name: "Pollo entero",
        image: "/img/products/items/ave/pollo-entero.jpg",
      },
      { name: "Pechuga", image: "/img/products/items/ave/pechuga.jpg" },
      { name: "Pata y muslo", image: "/img/products/items/ave/pata-muslo.jpg" },
      { name: "Alitas", image: "/img/products/items/ave/alitas.jpg" },
    ],
  },
  {
    id: "huesos",
    title: "Huesos",
    description: "Huesos frescos para caldos y sopas",
    image: "/img/products/hueso.webp",
    items: [
      {
        name: "Huesos para caldo",
        image: "/img/products/items/huesos/caldo.jpg",
      },
      { name: "Osobuco", image: "/img/products/items/huesos/osobuco.jpg" },
      {
        name: "Huesos con carne",
        image: "/img/products/items/huesos/con-carne.jpg",
      },
    ],
  },
  {
    id: "interiores",
    title: "Interiores",
    description: "Interiores frescos seleccionados",
    image: "/img/products/interiores.webp",
    items: [
      { name: "Hígado", image: "/img/products/items/interiores/higado.jpg" },
      { name: "Riñón", image: "/img/products/items/interiores/rinon.jpg" },
      {
        name: "Mondongo",
        image: "/img/products/items/interiores/mondongo.jpg",
      },
      { name: "Lengua", image: "/img/products/items/interiores/lengua.jpg" },
    ],
  },
  {
    id: "embutidos",
    title: "Embutidos",
    description: "Embutidos artesanales de calidad",
    image: "/img/products/embutidos.webp",
    items: [
      { name: "Chorizo", image: "/img/products/items/embutidos/chorizo.jpg" },
      { name: "Morcilla", image: "/img/products/items/embutidos/morcilla.jpg" },
      {
        name: "Salchicha",
        image: "/img/products/items/embutidos/salchicha.jpg",
      },
      { name: "Salame", image: "/img/products/items/embutidos/salame.jpg" },
    ],
  },
]
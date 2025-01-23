export type Currency = 'CLP' | 'USD'

export interface ProductPrice {
  value: number
  currency: Currency
  unit: 'kg' | 'unidad'
}

export interface ProductItem {
  name: string
  image: string
  price: ProductPrice
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
      {
        name: "Lomo",
        image: "/img/products/items/vacuno/lomo.jpg",
        price: { value: 10000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Costilla",
        image: "/img/products/items/vacuno/costilla.jpg",
        price: { value: 5000, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Bife",
        image: "/img/products/items/vacuno/bife.jpg",
        price: { value: 7000, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Asado Tira",
        image: "/img/products/asado-tira",
        price: { value: 6000, currency: 'CLP', unit: 'kg' },
      },
    ],
  },
  {
    id: "cerdo",
    title: "Cerdo",
    description: "Cortes frescos de cerdo de primera calidad",
    image: "/img/products/cerdo.webp",
    items: [
      { name: "Chuleta",
        image: "/img/products/items/cerdo/chuleta.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' } },
      { name: "Costilla", 
        image: "/img/products/items/cerdo/costilla.jpg",
         price: { value: 3000, currency: 'CLP', unit: 'kg' } },
      { name: "Panceta",
        image: "/img/products/items/cerdo/panceta.jpg",
        price: { value: 5000, currency: 'CLP', unit: 'kg' } },
      { name: "Bondiola",
        image: "/img/products/items/cerdo/bondiola.jpg",
        price: { value: 6000, currency: 'CLP', unit: 'kg' } },
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
        price: { value: 3000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Pechuga",
        image: "/img/products/items/ave/pechuga.jpg",
        price: { value: 5000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Pata y muslo",
        image: "/img/products/items/ave/pata-muslo.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' } },
      { name: "Alitas",
        image: "/img/products/items/ave/alitas.jpg",
        price: { value: 3000, currency: 'CLP', unit: 'kg' }
      },
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
        price: { value: 1000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Osobuco",
        image: "/img/products/items/huesos/osobuco.jpg",
        price: { value: 2000, currency: 'CLP', unit: 'unidad' }
      },
      {
        name: "Huesos con carne",
        image: "/img/products/items/huesos/con-carne.jpg",
        price: { value: 3000, currency: 'CLP', unit: 'kg' }
      },
    ],
  },
  {
    id: "interiores",
    title: "Interiores",
    description: "Interiores frescos seleccionados",
    image: "/img/products/interiores.webp",
    items: [
      { name: "Hígado",
        image: "/img/products/items/interiores/higado.jpg",
        price: { value: 2000, currency: 'CLP', unit: 'kg' },
      },
      { name: "Riñón",
        image: "/img/products/items/interiores/rinon.jpg",
        price: { value: 1000, currency: 'CLP', unit: 'kg' } },
      {
        name: "Mondongo",
        image: "/img/products/items/interiores/mondongo.jpg",
        price: { value: 3000, currency: 'CLP', unit: 'kg' },
      },
      { name: "Lengua",
        image: "/img/products/items/interiores/lengua.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' },
      },
    ],
  },
  {
    id: "embutidos",
    title: "Embutidos",
    description: "Embutidos artesanales de calidad",
    image: "/img/products/embutidos.webp",
    items: [
      { name: "Chorizo",
        image: "/img/products/items/embutidos/chorizo.jpg",
        price: { value: 5000, currency: 'CLP', unit: 'kg' }},
      { name: "Morcilla",
        image: "/img/products/items/embutidos/morcilla.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' } },
      {
        name: "Salchicha",
        image: "/img/products/items/embutidos/salchicha.jpg",
        price: { value: 3000, currency: 'CLP', unit: 'kg' },
      },
      { name: "Salame",
        image: "/img/products/items/embutidos/salame.jpg",
        price: { value: 6000, currency: 'CLP', unit: 'kg' },
      },
    ],
  },
]
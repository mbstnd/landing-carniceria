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
        name: "Lomo Vetado",
        image: "/img/products/items/vacuno/lomo-vetado.jpg",
        price: { value: 24998, currency: 'CLP', unit: 'kg' }
      },
      { 
        name: "Filete",
        image: "/img/products/items/vacuno/filete.jpg",
        price: { value: 24998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Lomo Liso",
        image: "/img/products/items/vacuno/lomo-liso.jpg",
        price: { value: 17998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Asiento",
        image: "/img/products/items/vacuno/asiento.jpg",
        price: { value: 16998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Posta Negra",
        image: "/img/products/items/vacuno/posta-negra.webp",
        price: { value: 13998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Posta Rosada",
        image: "/img/products/items/vacuno/posta-rosada.webp",
        price: { value: 13998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Posta Paleta",
        image: "/img/products/items/vacuno/posta-paleta.webp",
        price: { value: 13998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Punta de Ganso",
        image: "/img/products/items/vacuno/punta-de-ganso.webp",
        price: { value: 16998, currency: 'CLP', unit: 'kg' },
      },
      {
        name: "Huachalomo",
        image: "/img/products/items/vacuno/huachalomo.jpg",
        price: { value: 10998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Sobrecostilla",
        image: "/img/products/items/vacuno/sobrecostilla.jpg",
        price: { value: 10998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Abastero",
        image: "/img/products/items/vacuno/abastero.webp",
        price: { value: 10998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Tapabarriga",
        image: "/img/products/items/vacuno/tapabarriga.webp",
        price: { value: 10998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Tapapecho",
        image: "/img/products/items/vacuno/tapapecho.webp",
        price: { value: 9998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Molida Especial",
        image: "/img/products/items/vacuno/molida-especial.jpg",
        price: { value: 12000, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Molida Corriente",
        image: "/img/products/items/vacuno/molida-corriente.webp",
        price: { value: 7000, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Carne Picada (Posta)",
        image: "/img/products/items/vacuno/carne-picada.jpg",
        price: { value: 14000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Choclillo",
        image: "/img/products/items/vacuno/choclillo.webp",
        price: { value: 12998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Punta Picana",
        image: "/img/products/items/vacuno/punta-picana.webp",
        price: { value: 15998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Asado Carnicero",
        image: "/img/products/items/vacuno/asado-carnicero.webp",
        price: { value: 10998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Punta Paleta",
        image: "/img/products/items/vacuno/punta-paleta.webp",
        price: { value: 12998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Palanca",
        image: "/img/products/items/vacuno/palanca.webp",
        price: { value: 12998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Entraña",
        image: "/img/products/items/vacuno/entraña.webp",
        price: { value: 21998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Plateada",
        image: "/img/products/items/vacuno/plateada.webp",
        price: { value: 10998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Pollo Ganso",
        image: "/img/products/items/vacuno/pollo-ganso.webp",
        price: { value: 13998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Ganso",
        image: "/img/products/items/vacuno/ganso.webp",
        price: { value: 13998, currency: 'CLP', unit: 'kg' } 
      }
    ],
  },
  {
    id: "cerdo",
    title: "Cerdo",
    description: "Cortes frescos de cerdo de primera calidad",
    image: "/img/products/cerdo.webp",
    items: [
      { name: "Chuleta vetada",
        image: "/img/products/items/cerdo/chuleta-vetada.jpg",
        price: { value: 6498, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Chuleta centro",
        image: "/img/products/items/cerdo/chuleta-centro.jpg",
        price: { value: 6498, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Costillar entero", 
        image: "/img/products/items/cerdo/costillar-entero.jpg",
         price: { value: 7998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Pulpa sin hueso",
        image: "/img/products/items/cerdo/pulpa-deshuesada.jpg",
        price: { value: 6998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Cazuela de cerdo",
        image: "/img/products/items/cerdo/cazuela-cerdo.webp",
        price: { value: 3998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Pernil de cerdo",
        image: "/img/products/items/cerdo/pernil-cerdo.webp",
        price: { value: 4498, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Patas de Cerdo",
        image: "/img/products/items/cerdo/patas-cerdo.webp",
        price: { value: 3798, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Chicharron de Cerdo",
        image: "/img/products/items/cerdo/chicharron.webp",
        price: { value: 7998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Pulpa de Cerdo",
        image: "/img/products/items/cerdo/pulpa.webp",
        price: { value: 5998, currency: 'CLP', unit: 'kg' } 
      },
      { name: "Paleta de Cerdo",
        image: "/img/products/items/cerdo/paleta.webp",
        price: { value: 4998, currency: 'CLP', unit: 'kg' } 
      },
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
        image: "/img/products/items/ave/pollo-entero.webp",
        price: { value: 3998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Pechuga",
        image: "/img/products/items/ave/pechuga-entera.jpg",
        price: { value: 4998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Pechuga deshuesada",
        image: "/img/products/items/ave/pechuga-deshuesada.jpg",
        price: { value: 6998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Trutro cuarto",
        image: "/img/products/items/ave/trutro-cuarto.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' }
      },
      { name: "Alitas de pollo",
        image: "/img/products/items/ave/alitas-pollo.webp",
        price: { value: 5498, currency: 'CLP', unit: 'kg' }
      },
      { name: "Trutro entero",
        image: "/img/products/items/ave/trutro-entero.jpg",
        price: { value: 3998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Trutro ala",
        image: "/img/products/items/ave/trutro-ala.jpg",
        price: { value: 4998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Patas de pollo",
        image: "/img/products/items/ave/patas-de-pollo.jpg",
        price: { value: 2998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Cazuela especial de pollo",
        image: "/img/products/items/ave/cazuela-especial-pollo.webp",
        price: { value: 4998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Cogote de pollo",
        image: "/img/products/items/ave/cogote-pollo.webp",
        price: { value: 1998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Contre de pollo",
        image: "/img/products/items/ave/contre-pollo.webp",
        price: { value: 1998, currency: 'CLP', unit: 'kg' }
      },
      { name: "Pana de pollo",
        image: "/img/products/items/ave/pana-pollo.webp",
        price: { value: 1998, currency: 'CLP', unit: 'kg' }
      },
    ],
  },
  {
    id: "huesos",
    title: "Huesos",
    description: "Huesos frescos para caldos y sopas",
    image: "/img/products/items/vacuno/osobuco.jpg",
    items: [
      { name: "Osobuco",
        image: "/img/products/items/vacuno/osobuco.jpg",
        price: { value: 10498, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Aletilla",
        image: "/img/products/items/huesos/aletilla.webp",
        price: { value: 6998, currency: 'CLP', unit: 'kg' }
      },
      { 
        name: "Asado Tira",
        image: "/img/products/items/vacuno/asado-tira.jpg",
        price: { value: 6000, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Cazuela especial de vacuno",
        image: "/img/products/items/huesos/cazuela-especial-vacuno.webp",
        price: { value: 7998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Costilla Coluda",
        image: "/img/products/items/huesos/costilla-coluda.webp",
        price: { value: 8998, currency: 'CLP', unit: 'kg' },
      },
      { 
        name: "Hueso Carnudo",
        image: "/img/products/items/huesos/hueso-carnudo.webp",
        price: { value: 4998, currency: 'CLP', unit: 'kg' },
      },
    ],
  },
  {
    id: "interiores",
    title: "Interiores",
    description: "Interiores frescos seleccionados",
    image: "/img/products/items/vacuno/guata-callo.jpg",
    items: [
      {
        name: "Riñón de Vacuno",
        image: "/img/products/items/vacuno/higado.jpg",
        price: { value: 2000, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Hígado (Panita) Nac. Cat. V",
        image: "/img/products/items/vacuno/higado.jpg",
        price: { value: 5998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Guata Callo",
        image: "/img/products/items/vacuno/guata-callo.jpg",
        price: { value: 6998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Pata de Vacuno",
        image: "/img/products/items/vacuno/pata-vacuno.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Corazón de Vacuno",
        image: "/img/products/items/interiores/corazon-vacuno.webp",
        price: { value: 5998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Chunchul",
        image: "/img/products/items/vacuno/chunchul.jpg",
        price: { value: 5998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Lengua de Vacuno",
        image: "/img/products/items/interiores/lengua-vacuno.webp",
        price: { value: 12998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Higado de Vacuno",
        image: "/img/products/items/interiores/higado-vacuno.webp",
        price: { value: 12998, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Riñón de Vacuno",
        image: "/img/products/items/interiores/rinon-vacuno.webp",
        price: { value: 2998, currency: 'CLP', unit: 'kg' }
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
        price: { value: 4000, currency: 'CLP', unit: 'kg' }
      },
      {
        name: "Vienesas",
        image: "/img/products/items/embutidos/salchicha.jpg",
        price: { value: 4000, currency: 'CLP', unit: 'kg' },
      },
      {
        name: "Vienesas 5 unidades",
        image: "/img/products/items/embutidos/salchicha.jpg",
        price: { value: 1250, currency: 'CLP', unit: 'kg' },
      },
      {
        name: "Longaniza",
        image: "/img/products/items/embutidos/salchicha.jpg",
        price: { value: 8000, currency: 'CLP', unit: 'kg' },
      },
      {
        name: "Prietas paquete 3 unidades", 
        image: "/img/products/items/embutidos/salchicha.jpg",
        price: { value: 2500, currency: 'CLP', unit: 'kg' },
      }
    ],
  },
]
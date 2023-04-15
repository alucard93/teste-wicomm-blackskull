import {
  IDatababaseCategories,
  IDatababaseMain,
  IDatababaseProduct,
  IDatabaseAtletic,
  IDatabaseBlog,
  IDatabaseObjective,
} from "../interfaces/DatabaseInterface";

// database seção principal
export const databaseMain: IDatababaseMain[] = [
  {
    id: "1",
    src: "../assets/main.svg",
    alt: "Descrição da imagem 1",
    title: "Ajudando você a ter mais performance",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
  },
];

// database seção categorias
export const databaseCategories: IDatababaseCategories[] = [
  {
    id: "1",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 1",
    title: "Proteínas",
  },
  {
    id: "2",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 2",
    title: "Hipercalóricos",
  },
  {
    id: "3",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 3",
    title: "Creatina",
  },
  {
    id: "4",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 4",
    title: "Packs",
  },
  {
    id: "5",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 5",
    title: "Aminoácidos",
  },
  {
    id: "6",
    src: "../assets/category.svg",
    alt: "Descrição da imagem 6",
    title: "Saúde",
  },
];

// database seção produtos
export const databaseProducts: IDatababaseProduct[] = [
  {
    id: "1",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 1",
    title: "Whey Zero (Com Lactase) Black Skull - 900G",
    price: "R$ 349,90",
    payment: "ou 12X de R$ 29,16",
  },
  {
    id: "2",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 2",
    title: "Whey Zero (Com Lactase) Black Skull - 900G",
    price: "R$ 349,90",
    payment: "ou 12X de R$ 29,16",
  },
  {
    id: "3",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 3",
    title: "Whey Zero (Com Lactase) Black Skull - 900G",
    price: "R$ 349,90",
    payment: "ou 12X de R$ 29,16",
  },
  {
    id: "4",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 4",
    title: "Whey Zero (Com Lactase) Black Skull - 900G",
    price: "R$ 349,90",
    payment: "ou 12X de R$ 29,16",
  },
  // {
  //   id: "5",
  //   src: "../assets/product.svg",
  //   alt: "Descrição da imagem 5",
  //   title: "Whey Zero (Com Lactase) Black Skull - 900G",
  //   price: "R$ 349,90",
  //   payment: "ou 12X de R$ 29,16",
  // },
  // {
  //   id: "6",
  //   src: "../assets/product.svg",
  //   alt: "Descrição da imagem 6",
  //   title: "Whey Zero (Com Lactase) Black Skull - 900G",
  //   price: "R$ 349,90",
  //   payment: "ou 12X de R$ 29,16",
  // },
];

// database Atletas
export const databaseAthetic: IDatabaseAtletic[] = [
  {
    id: "1",
    src: "../assets/atleticCard1.svg",
    nameAthetic: "Cedric McMillan",
  },
  {
    id: "2",
    src: "../assets/atleticCard2.svg",
    nameAthetic: "Cedric McMillan",
  },
  {
    id: "3",
    src: "../assets/atleticCard3.svg",
    nameAthetic: "Cedric McMillan",
  },
];

// database Blog
export const databaseBlog: IDatabaseBlog[] = [
  {
    id: "1",
    src: "../assets/blogCard1.svg",
    alt: "Imagem 1 primeiro artigo do blog",
    date: "03.05.21",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: "2",
    src: "../assets/blogCard2.svg",
    alt: "Imagem 2 segundo artigo do blog",
    date: "03.05.21",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: "3",
    src: "../assets/blogCard3.svg",
    alt: "Imagem 3 terceiro artigo do blog",
    date: "03.05.21",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

export const databaseObjectives: IDatabaseObjective[] = [
  {
    id: "1",
    src: "../assets/objectiveCard1.svg",
    alt: "Imagem 1 dos Objetivos",
    title: "Ganho de massa"
  },
  {
    id: "2",
    src: "../assets/objectiveCard2.svg",
    alt: "Imagem 2 dos Objetivos",
    title: "Energia"
  },
  {
    id: "3",
    src: "../assets/objectiveCard3.svg",
    alt: "Imagem 3 dos Objetivos",
    title: "Recuperação Muscular"
  },
  {
    id: "4",
    src: "../assets/objectiveCard4.svg",
    alt: "Imagem 4 dos Objetivos",
    title: "Emagrecimento"
  },
]

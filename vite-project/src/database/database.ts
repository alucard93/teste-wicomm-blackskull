export interface IDatababaseMain {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
}

export interface IDatababaseCategories {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
}

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

export const databaseCategories: IDatababaseCategories[] = [
  {
    id: "1",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 1",
    title: "Proteínas",
  },
  {
    id: "2",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 2",
    title: "Hipercalóricos",
  },
  {
    id: "3",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 3",
    title: "Creatina",
  },
  {
    id: "4",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 4",
    title: "Packs",
  },
  {
    id: "5",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 5",
    title: "Aminoácidos",
  },
  {
    id: "6",
    src: "../assets/product.svg",
    alt: "Descrição da imagem 6",
    title: "Saúde",
  },
];

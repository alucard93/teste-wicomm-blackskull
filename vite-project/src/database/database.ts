export interface IDatababaseMain {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
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

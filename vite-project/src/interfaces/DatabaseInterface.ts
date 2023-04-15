// tipagem seção principal
export interface IDatababaseMain {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
}

// tipagem categorias
export interface IDatababaseCategories {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
}

// tipagem props categories
export interface IDatabaseCategories {
  databaseCategories: IDatababaseCategories[];
}

// tipagem produtos;
export interface IDatababaseProduct {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
  price?: string;
  payment?: string;
}


// tipagem props produtos
export interface IDatabaseProducts {
  databaseProducts: IDatababaseProduct[];
}

// tipagem atletas

export interface IDatabaseAtletic {
  id?: string
  src?: string
  nameAthetic?: string
}

// tipagem props atletas
export interface databaseAthetic {
  databaseAthetic: IDatabaseAtletic[]
}


// tipagem blogs
export interface IDatabaseBlog {
  id?: string
  src?: string
  alt?: string
  date?: string
  description?: string
} 

// tipagem props atletas
export interface databaseBlog {
  databaseBlog: IDatabaseBlog[]
}

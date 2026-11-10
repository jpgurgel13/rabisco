export type CorDaNota = "amarelo" | "salmao" | "azul";
export type ModeloDaLista = "simples" | "compras";

export interface ItemDaLista {
  id: string;
  texto: string;
  concluido: boolean;
}

interface CamposComunsDaNota {
  id: string;
  titulo: string;
  cor: CorDaNota;
  fixada: boolean;
  editadaEm: number;
}

export interface NotaDeTexto extends CamposComunsDaNota {
  tipo: "texto";
  conteudo: string;
}

export interface NotaDeLista extends CamposComunsDaNota {
  tipo: "lista";
  modelo: ModeloDaLista;
  itens: ItemDaLista[];
}

export type Nota = NotaDeTexto | NotaDeLista;

// Moldes (tipos) de tudo o que o Rabisco guarda.
// Nada aqui aparece na tela: é só a descrição do formato dos dados.

// Cardápios fixos de valores (union types)
export type CorDaNota = "amarelo" | "salmao" | "azul";
export type ModeloDaLista = "simples" | "compras";

export interface ItemDaLista {
  id: string;
  texto: string;
  concluido: boolean;
}

// Campos que TODA nota tem, seja de texto ou de lista
interface CamposComunsDaNota {
  id: string;
  titulo: string;
  cor: CorDaNota;
  fixada: boolean;
  editadaEm: number; // milissegundos de Date.now()
}

// "tipo" é a etiqueta que diz qual formato de nota é este
export interface NotaDeTexto extends CamposComunsDaNota {
  tipo: "texto";
  conteudo: string;
}

export interface NotaDeLista extends CamposComunsDaNota {
  tipo: "lista";
  modelo: ModeloDaLista;
  itens: ItemDaLista[];
}

// Uma nota é de texto OU de lista (união discriminada)
export type Nota = NotaDeTexto | NotaDeLista;

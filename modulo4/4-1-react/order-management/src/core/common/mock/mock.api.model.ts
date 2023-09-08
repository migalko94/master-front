export interface ApiOrderInfo {
  id: number;
  description: string;
  price: number;
}

export const getApiData = (): Promise<ApiOrderInfo[]> => {
  return Promise.resolve([
    {
      id: 1,
      description: "Reactivos maquinaria",
      price: 2345,
    },
    {
      id: 2,
      description: "Recambios impresión",
      price: 135,
    },
    {
      id: 3,
      description: "Soportes plataforma",
      price: 540,
    },
  ]);
};

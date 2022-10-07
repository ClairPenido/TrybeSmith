export interface Products {
  id: number,
  name: string,
  amount: string, 
  orderId?: number,
}

export interface Users {
  id: number,
  username: string,
  classe: string, 
  level: number,
  password: string,
}

export interface Orders {
  id: number;
  userId: number;
  productsId: number | number[]; // para o caso de 2 numeros
}

export interface Token {
  token: string;
}

export interface Login {
  id?: number,
  username: string,
  password: string;
}

export enum RegretType {
  foundation,
  boldness,
  moral,
  connection
}

export interface Regret {
  regretType: RegretType,
  name: string
}
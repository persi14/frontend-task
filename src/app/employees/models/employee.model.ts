import {Name} from "../../core/models/name.model";

export interface IEmployee {
  guid: string;
  age: number;
  name: Name;
  email: string;
}

export {};

declare global {
  interface Window { db: IEmployee[]; }
}

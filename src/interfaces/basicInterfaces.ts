import { Node } from "../LLNode";

export interface IClassInterface {
  protected_attribute: number,
  public_attribute: string,
  getProtected(): number,
  getProtected_interface():void
}

export interface IGenericInterface<U> {
  value: U
  getIdentity: () => U
}

export type Fn = (value: { [ket: string]: any }) => string;

export interface INode {
  value: number | string | { [ket: string]: any };
  next: Node | null;
  toString(fn?: Fn): string;
}

export interface INodeList {
  head: Node | null;
  tail: Node | null;
}
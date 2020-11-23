import { Fn, INode } from "./interfaces/basicInterfaces";

export class Node implements INode {
  constructor(
    public value: number | string | { [ket: string]: any },
    public next: Node | null = null,
  ) {}
}
let nextId = 30

export class Hero {

  public static clone = (h: any) => new Hero(h.id, h.name, h.alterEgo, h.power)

  public static setNextId(next: number) { nextId = next }

  constructor(
    public id?: number,
    public name?: string,
    public power?: string,
    public alterEgo?: string) {

    this.id = id || nextId++
  }

  public clone() { return Hero.clone(this) }
}

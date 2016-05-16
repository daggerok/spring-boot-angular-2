/**
 * Created by mak on 5/16/16.
 */
export interface DTO {
  name: string
  age: number
}

export class DTOs {
  public static isValid = (dto: DTO): boolean =>
    null != dto.name && null != dto.age && dto.name.length > 0 && dto.age >= 0

  public static empty = (): DTO => {return {name: null, age: null}}
}

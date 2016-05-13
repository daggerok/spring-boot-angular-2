import {Hero} from './Hero'

describe('Hero', () => {
  let hero

  beforeEach(() => {
    hero = new Hero(1, 'Super Cat')
  })

  it('has name given in the constructor', () => {
    expect(hero.name).toEqual('Super Cat')
  })

  it('has id given in the constructor', () => {
    expect(hero.id).toEqual(1)
  })
})

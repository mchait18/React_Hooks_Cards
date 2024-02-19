/* Select a random element from values array. */
import { v1 as uuid } from "uuid";

function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}
const formatCard = (data) => {
  return ({
    id: uuid(),
    image: data.cards[0].image
  })
}

const formatPokecard = (data) => {
  return ({
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  })
}
export { choice, formatCard, formatPokecard };
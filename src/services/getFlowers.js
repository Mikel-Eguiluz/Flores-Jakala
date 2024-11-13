const FLOWER_API_URL = `https://dulces-petalos.jakala.es/api/product`

const getFlowers = async id => {
  const url = id ? `${FLOWER_API_URL}/${id}` : FLOWER_API_URL
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}

export default getFlowers

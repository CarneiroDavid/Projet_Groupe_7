import CardList from "../components/CardList"


const fetchUsers = async (name) =>  {
  console.log(name)
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const searchPage = async (name) => {
  console.log(name)
  const res = await fetchUsers(name.search)
  // console.log(res);
  const cardList = CardList(res.results)
  
  return cardList
}

export default searchPage

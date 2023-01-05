import CardList from "../components/CardList"

const fetchUsers = async () =>  {
  try {
    const req = await fetch('https://rickandmortyapi.com/api/character')
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const UserPage = async () => {
  const res = await fetchUsers()
  console.log(res);
  return CardList(res.results)
}

export default UserPage
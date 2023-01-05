import CardUser from "../components/CardUser"

const fetchUser = async (id) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const UserDetailPage = async (kwargs) => {
  const res = await fetchUser(kwargs.id)
  console.log(res);
  return CardUser(res)
}

export default UserDetailPage
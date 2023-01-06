import CardUser from "../components/CardUser";

const fetchLocationById = async ({id}) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/graphql`,{
        headers:{
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify({query:
`query LocationById($id: ID!) {
  location(id: $id) {
    name
    id
    dimension
    residents {
      name
      image
    }
  }
}`,variables:{
      "id":id
    }
}),
    })
    const res = await req.json()
    console.log(res)
    return res.data.location
  } catch(e) {
    throw new Error(e)
  }
}
  
  const locationDetails = async (kwargs) => {
    console.log(kwargs.id)
    const res = await fetchLocationById({id:kwargs.id})
    return CardUser(res);
  }

  export default locationDetails
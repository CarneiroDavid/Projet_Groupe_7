import CardUser from "../components/CardUser";

const fetchLocation = async (id) =>  {
    try {
      const req = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
      const res = await req.json()
    
      return res
    } catch(e) {
      throw new Error(e)
    }
  }
  
  const locationDetails = async (kwargs) => {
    const res = await fetchLocation(kwargs.id)
    return CardUser(res);
  }

  export default locationDetails
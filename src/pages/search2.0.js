import CardList from "../components/CardList"
import { tabManager } from "../../main"

const fetchCharacterByString = async (name,page) =>  {
  console.log(name)
  try {
    const req = await fetch(`https://rickandmortyapi.com/graphql`,{
        headers:{
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify({
          query:
          `query{
                characters(page:${page},filter:{name:"${name}"}){
                info{
                    count,
                    pages,
                },
                results{
                    id,
                    name,
                    image,
                }

            }
            }
          `,
          variables:{
          }
        })
    })
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const searchPage2 = async (name,page=1) => {
  console.log(name)
  const res = await fetchCharacterByString(name.search,page);
  console.log(res);
  const cardList = CardList(res.data.characters.results)
  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('character',{id:i.getAttribute('data-id')});
    })
  }
  return cardList
}

export default searchPage2

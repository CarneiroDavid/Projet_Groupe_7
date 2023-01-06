import CardList from "../components/CardList"
import { tabManager } from "../../main"
import {UserPage, hundleInfScroll} from "./UserPage"
import Card from "../components/Card"
const fetchCharacterByString = async ({name,page}) =>  {
  console.log(name,page);
  let query = `query {
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
          `;
          console.log(query);
  try {
    const req = await fetch(`https://rickandmortyapi.com/graphql`,{
        headers:{
            'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify({
          query:query,
        
          variables:{
          }
        })
    })
    const res = await req.json()
    return res.data.characters
  } catch(e) {
    throw new Error(e)
  }
}

const searchPage2 = async (name,page=1) => {
  console.log(name)
  const res = await fetchCharacterByString({name:name.search,page});
  console.log(res);
  const cardList = CardList(res.results)
  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('character',{id:i.getAttribute('data-id')});
    })
  }

  window.addEventListener('scroll', hundleInfScroll=>{
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) { 
      page +=1;tabManager.loadMorePage({callback:fetchCharacterByString,cardType:Card,HtmlElement:cardList,args:{name:name.search,page:page}})};
  });

  return cardList
}

export default searchPage2

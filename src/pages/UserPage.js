import CardList from "../components/CardList"
import Card from "../components/Card"
import createElement from "../dom/createElement"
import { tabManager } from "../../main"
import Pagination from "../components/Pagination.js"
const fetchUsers = async ({page=1}) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const res = await req.json()
    return res
  } catch(e) {
    throw new Error(e)
  }
}
export let hundleInfScroll;

export const UserPage = async (kwargs) => {
  const res = await fetchUsers(kwargs.page);
  const cardList = CardList(res.results)
  let page = kwargs.page
  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('character',{id:i.getAttribute('data-id')});
      window.removeEventListener("scroll", hundleInfScroll);
    })
  }
  window.addEventListener('scroll', hundleInfScroll=>{
      const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      if (endOfPage) { 
        page+=1;tabManager.loadMorePage({callback:fetchUsers,cardType:Card,HtmlElement:cardList,args:{page:page}})
      }
    });

  return cardList
}

export default {UserPage, hundleInfScroll}
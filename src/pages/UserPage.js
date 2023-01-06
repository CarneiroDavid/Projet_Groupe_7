import CardList from "../components/CardList"
import createElement from "../dom/createElement"
import { tabManager } from "../../main"
import Pagination from "../components/Pagination.js"
const fetchUsers = async (page=1) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const UserPage = async (kwargs) => {
  const res = await fetchUsers(kwargs.page);
  const cardList = CardList(res.results)

  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('character',{id:i.getAttribute('data-id')});
    })
  }
  cardList.appendChild(Pagination(kwargs.page, 'characters'));
  return cardList
}

export default UserPage
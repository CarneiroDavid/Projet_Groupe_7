import CardList from "../components/CardList"
import Pagination from "../components/Pagination.js"
import { tabManager } from "../../main"


const fetchUsers = async (name) =>  {
  try {
    const req = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const searchPage = async (name) => {
  const res = await fetchUsers(name.search)
  const cardList = CardList(res.results)
  
  
  return cardList
}

const location = async (page=1) => {
  try{
    const req = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`);
    const res = await req.json();
    return res
  }catch(e){
    throw new Error(e);
  }
}

const locationRender = async (kwargs) => {
  const res = await location(kwargs.page)
  const cardList = CardList(res.results)

  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('oneLocation',{id:i.getAttribute('data-id')});
      // window.alert('test');
    })
  }
  cardList.appendChild(Pagination(kwargs.page, 'location'));
  return cardList
}

export default {searchPage, locationRender }
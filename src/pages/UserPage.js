import CardList from "../components/CardList"
import Card from "../components/CardUser"
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
  let page = kwargs.page
  for(let i of cardList.children){
    i.addEventListener('click', () => {
      tabManager.openTabById('character',{id:i.getAttribute('data-id')});
      window.removeEventListener("scroll", handleInfiniteScroll);
    })
  }
  window.addEventListener('scroll', async (evt) => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) {
      page += 1;
      let newResult = await fetchUsers(page);
      newResult.results.forEach(element => {
        const card = Card(element);
        console.log(card)
        card.addEventListener("click", () => {
          tabManager.openTabById('character',{id:card.getAttribute('data-id')});
          window.removeEventListener("scroll", handleInfiniteScroll);
        });
        cardList.appendChild(card, 'characters');
      });
    }
  })

  return cardList
}

export default UserPage
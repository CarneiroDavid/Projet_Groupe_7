import './style.css';
import UserPage from "./src/pages/UserPage";
import UserDetailPage from "./src/pages/DetailUser";
import searchPage from "./src/pages/searchUser";
import oneLocation from "./src/pages/oneLocation";
import TabManager from "./src/utils/TabManager";
import searchPage2 from "./src/pages/search2.0";
const rootElement = document.querySelector('#app')

export const tabManager = new TabManager(rootElement, {
  character: {
    component: UserDetailPage,
  },
  characters: {
    component: UserPage,
  },
 
  search : {
    component: searchPage.searchPage,
  },
  location:{
    component: searchPage.locationRender,
  },
  oneLocation: {
    component: oneLocation,
  },
  searchBeta : {
    component: searchPage2,
  }
})
tabManager.openTabById('characters', {page:1})

document.querySelector('#btn-characters').addEventListener('click', () => {
    tabManager.openTabById('characters')
  });

  document.querySelector('#inputRecherche').addEventListener('click', () => {
    tabManager.openTabById('searchBeta', {search: document.querySelector('#searchCharacter').value})
  });
  document.querySelector('#ville').addEventListener('click', () => {
    tabManager.openTabById('location', {page:1});
  })


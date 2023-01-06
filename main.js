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
    component: UserPage.UserPage,
  },
 
  search : {
    component: searchPage2,
  },
  location:{
    component: searchPage.locationRender,
  },
  oneLocation: {
    component: oneLocation,
  }
})
tabManager.openTabById('characters', {page:1})

document.querySelector('#btn-characters').addEventListener('click', () => {
    tabManager.openTabById('characters',{page:1})
  });

  document.querySelector('#inputRecherche').addEventListener('click', () => {
    window.removeEventListener("scroll",UserPage.hundleInfScroll);
    tabManager.openTabById('search', {search: document.querySelector('#searchCharacter').value})
  });
  document.querySelector('#ville').addEventListener('click', () => {
    tabManager.openTabById('location', {page:1});
  })


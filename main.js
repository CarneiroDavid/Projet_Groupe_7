import './style.css';
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import UserDetailPage from "./src/pages/DetailUser";
import searchPage from "./src/pages/searchUser";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  character: {
    component: UserDetailPage,
  },
  characters: {
    component: UserPage,
  },
  search : {
    component: searchPage,
  }
})
tabManager.openTabById('characters')

document.querySelector('#btn-characters').addEventListener('click', () => {
    tabManager.openTabById('characters')
  });

  document.querySelector('#inputRecherche').addEventListener('click', () => {
    tabManager.openTabById('search', {search: document.querySelector('#searchCharacter').value})
  });

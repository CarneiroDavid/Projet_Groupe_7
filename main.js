import './style.css';
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import UserDetailPage from "./src/pages/DetailUser";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  character: {
    component: UserDetailPage,
  },
  characters: {
    component: UserPage,
  }
})

tabManager.openTabById('characters')

document.querySelector('#btn-characters').addEventListener('click', () => {
    tabManager.openTabById('characters')
  });
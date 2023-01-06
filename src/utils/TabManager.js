import createElement from "../dom/createElement"
let hundleInfScroll;
class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement
    this.componentMapping = componentMapping
  } 

  async openTabById(id,kwargs= {}) {
    if (!(id in this.componentMapping)) {
      throw new Error('This id is not valid')
    }
    
    const { component, params = [kwargs] } = this.componentMapping[id]
    let Component = await component(...params)
    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(Component)
  }
  async loadMorePage({callback,HtmlElement,cardType,args={}}) {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) {
      let newResult = await callback(args);
      newResult.results.forEach(element => {
        const card = createElement(cardType(element));
        card.addEventListener("click", () => {
          this.openTabById('character',{id:card.getAttribute('data-id')});
          window.removeEventListener("scroll", hundleInfScroll);
        });
        HtmlElement.appendChild(card, 'characters');
      });
    }
  }
}

export default TabManager
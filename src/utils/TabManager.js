class TabManager {
  constructor(rootElement, componentMapping) {
    this.rootElement = rootElement
    this.componentMapping = componentMapping
  }

  async openTabById(id) {
    // if (!(id in this.componentMapping)) {
    //   throw new Error('This id is not valid')
    // }
    let Component;
    if(id !== 'characters'){
      const { component, params = [id] } = this.componentMapping['page1']
      Component = await component(...params)
    }else{
      const { component, params = [id] } = this.componentMapping[id]
      Component = await component(...params)

      for(let i of Component.children){
        i.addEventListener('click', () => {
          this.openTabById(i.getAttribute('data-id'));
        })
      }
      console.log(Component, typeof Component);

    }
    this.rootElement.innerHTML = ''
    this.rootElement.appendChild(Component)
  }
}

export default TabManager

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
  async expendResult(id,kwargs= {}) {
    if (!(id in this.componentMapping)) {
      throw new Error('This id is not valid')
    }
    const { component, params = [kwargs] } = this.componentMapping[id]
    let Component = await component(...params)
    this.rootElement.appendChild(Component)
  }
}

export default TabManager
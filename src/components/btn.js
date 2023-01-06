export default function btn(name,type,target){
    return {
        tagName: 'button',
        classList:type,
        attributes:{
          'page': target
        },
        text:name
      }
}
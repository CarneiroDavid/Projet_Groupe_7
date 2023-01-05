export default function Card({ name,src, gender,id }) {
  return {
    tagName: 'div',
    
    attributes:{
      'data-id': id,
    },
    children: [
      {
        tagName: 'img',
        attributes: {
          src
        }
      },
      {
        tagName: 'h3',
        text:name
      },
      {
        tagName: 'p',
        text:gender
      },
    ]
  }
}
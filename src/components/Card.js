export default function Card({ name,src, gender,id, dimension }) {
  return {
    tagName: 'div',
    classList: ['card'],
    
    attributes:{
      'data-id': id,
    },
    children: [
      {
        tagName: 'img',
        classList: ['card-img'],
        attributes: {
          src : src ? src : ''
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
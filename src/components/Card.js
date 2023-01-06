export default function Card({ name,src, gender,id, image,dimension }) {
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
          src : src ? src : image
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
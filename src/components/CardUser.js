import createElement from "../dom/createElement"

export default function Card({ name,image, gender,id }) {
    return createElement({
      tagName: 'div',
      
      attributes:{
        'data-id': id,
      },
      children: [
        {
          tagName: 'img',
          attributes: {
            src: image
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
    })
  }
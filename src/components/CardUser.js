import createElement from "../dom/createElement"

export default function Card({ name,image, gender,id, dimension, residents }) {
  console.log(residents)

    return createElement({
      tagName: 'div',
      
      attributes:{
        'data-id': id,
      },
      children: [
        {
          tagName: 'img',
          attributes: {
            src: image ? image : ''
          }
        },
        {
          tagName: 'h2',
          text: gender ? 'Nom du personnage : '+ name : 'Nom de la location : ' + name  
        },
        {
          tagName: 'p',
          text:gender ? 'Genre : ' + gender : 'Dimension : ' + dimension
        },
        {
          tagName:'ul',
          // children: residents.map((element) => {
            // return {
            //   tagName: 'li',
            //   attributes: {
            //     'data-id': element.id,
                
            //   }
            // }
          // })
        }
      ]
    })
  }

  
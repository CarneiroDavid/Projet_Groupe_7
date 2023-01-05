import createElement from "../dom/createElement";
import Card from "./Card";

export default function CardList(arrayOfUsers) {
  return createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfUsers.map(({ name, image, gender, id }) => Card({ name: name, src: image,gender: gender, id:id }))
  })
}
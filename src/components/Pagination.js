import createElement from "../dom/createElement";
import Btn from "./btn.js";
import { tabManager } from "../../main";
export default function PaginationDiv(page, typePagination){
    const btns = [];
    if(page>1){
        btns.push(createElement(Btn('Précédent','PreviousPage',page-1)));
        btns.at(-1).addEventListener('click', () => { tabManager.openTabById(typePagination,{page: page-1}) });
    }
    if(page<42){
        btns.push(createElement(Btn('Suivant','NextPage',page+1)));
        btns.at(-1).addEventListener('click', () => { tabManager.openTabById(typePagination,{page: page+1}) });
    }
    const div = createElement({
        tagName: 'div',
        classList: ['pagination-div']
    });
    btns.forEach((element) => {
        div.appendChild(element);
    })
    
    return div
}
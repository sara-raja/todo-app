import makeElement from "../../utils/makeElement"

const todoItems = function ({id, title, category, isCompleted}) {
    const template =   `
     <li class="${category}" data-key="${id}">
        <p>${category}</p> 
        <p>${title}</p> 
        <p>${isCompleted}</p>
     </li>
    `
    return makeElement(template)
}

export {todoItems}
import makeElement from '../../utils/makeElement'
const listContainer = function (){
    const template = `
    <aside id="todo-list" class="todo-list">
    <header>
        <h2>To Do List</h2>
    </header>
    <ul id="todo-list" class="todo-list">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default listContainer
import makeElement from '../../utils/makeElement'
const listContainer = function (){
    const template = `
    <aside id="todo-list" class="todo-list">
        <div>
            <h2>To Do List</h2>
        </div>
        <ul id="todo-list" class="todo-list">
        
        </ul>
        <footer>

        </footer>
    </aside>
    `

    return makeElement(template)
}

export default listContainer
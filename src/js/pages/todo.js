import todolist from "../components/cards/todolist";
import {getStore} from "../redux/store";
import {todoItems} from "../components/cards/todoitem"
import pageHeader from "../components/cards/pageHeader";
import button from "../components/ui/button";

const todoPage = function(){
    const page = document.createElement('div');
    const header = pageHeader("Spooky To Do", "page-header");
    const container = todolist();
    const storetodo = getStore();
    const addButton = button("Add To Do", "add-button")
    page.append(header)

    if(storetodo.length !== 0){
        const elements = storetodo.map(items =>{
            return todoItems(items)
        })
        const ul = container.querySelector('#todo-list')
        elements.forEach(elm => {
            ul.append(elm)
        })
        page.append(container)
    }
    page.append(addButton)
    return page
    // console.log(ul);
}

export default todoPage


// import heading from '../components/ui/header';
// import link from '../components/ui/link';
// import tagline from '../components/ui/tagline';
// import logo from '../components/ui/logo';

// const todoPage = function(){

//     const page = document.createElement('div');
//     const h1 = heading('Spooky To Do', 'todo-heading');
//     const subheading = tagline('Do it now, or else', 'todo-subheading');
//         page.append(h1);
//         page.append(subheading);

//     const container = directory();
//         page.classList.add('todo-list');
//         return page;

// }

// export default todoPage;
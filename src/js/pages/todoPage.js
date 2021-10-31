// import directory from '../components/cards/directory'
// import makeElement from '../utils/makeElement'
// import {getStore} from '../redux/store'
// import { todoLi } from '../components/cards/todoLi'
// // Display Employee Data From The store 
 
// const todoPage = function(){
//     const page = document.createElement('div') 
//     const container = directory();
//     const todoList = getStore()

//     // if(todoList.length !== 0){
//     //   const elements =  todoList.map(item=>{
//     //          return todoLi(item) 
//     //     })
//     //   const ul = container.querySelector('#employees')
//     //   elements.forEach(elm=>{
//     //       ul.append(elm)
//     //   })
//     //   page.append(container)
//     // }
    
   
    
//     return page
// }

// export default todoPage



import heading from '../components/ui/header';
import link from '../components/ui/link';
import tagline from '../components/ui/tagline';
import logo from '../components/ui/logo';

const todoPage = function(){

    const page = document.createElement('div');
    const h1 = heading('Spooky To Do', 'todo-heading');
    const subheading = tagline('Do it now, or else', 'todo-subheading');
        page.append(h1);
        page.append(subheading);

    const container = directory();
        page.classList.add('todo-list');
        return page;

}

export default todoPage;
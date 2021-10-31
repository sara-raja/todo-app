import homePage from '../pages/homepage'
import todoPage from '../pages/todoPage';
import notFound from '../pages/pageNotFound';

const routes = {
    '/':homePage,
    '/todo':todoPage,

}


const Router =  function (pathname)   {

    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    console.log(isValidRoute)
    
    // loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = '';

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined){
        app.append(notFound())
    }else{
        app.appendChild(routes[window.location.pathname]())
    }
    // app.appendChild(routes[window.location.pathname]())

}




export {routes}
export default Router
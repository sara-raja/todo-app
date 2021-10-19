import homePage from '../pages/homepage'
import loginPage from '../pages/loginPage';
import signUpPage from '../pages/signUpPage';

const routes = {
    '/':homePage(),
    '/login':loginPage(),
    '/signup':signUpPage(),
}

const router = function(pathname){
    const app = document.querySelector('#app');
    app.innerHTML='';

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname]);

}



export {routes}
export default router
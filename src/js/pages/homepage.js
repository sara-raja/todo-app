import levelHeading from '../components/ui/header';
import link from '../components/ui/link';
const homePage = function(){

    const header = document.createElement('header');
    const h1 = levelHeading('h1', 'Home Page');
    const login = link('Login page', '/login');
    const signup = link('Sign Up', '/signup');
        header.append(h1);
        header.append(login);
        header.append(signup);

        return header;

}

export default homePage;
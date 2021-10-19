import levelHeading from '../components/ui/header';
import link from '../components/ui/link';
const signUpPage = function(){

    const header = document.createElement('header');
    const h1 = levelHeading('h1', 'Sign Up Page');
    const home = link('home page', '/');
    const login = link('Login Page', '/login');
        header.append(h1);
        header.append(home);
        header.append(login);

        return header;

}

export default signUpPage;
import heading from '../components/ui/header';
import link from '../components/ui/link';
import tagline from '../components/ui/tagline';
import logo from '../components/ui/logo';

const homePage = function(){

    const header = document.createElement('header');
    const image = logo();
    const h1 = heading('Spooky To Do', 'home-heading');
    const subheading = tagline('Do it now, or else', 'home-subheading');
    const todo = link('Go to app', '/todo', 'todo');
        header.append(image);
        header.append(h1);
        header.append(subheading);
        header.append(todo);

        header.classList.add('home')
        return header;

}

export default homePage;
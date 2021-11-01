import heading from '../components/ui/header';
import link from '../components/ui/link';
import tagline from '../components/ui/tagline';
import makeElement from "../utils/makeElement";
import pageHeader from '../components/cards/pageHeader';

const notFound = function(){

    const page = document.createElement('div');
    const header = pageHeader("Spooky To Do", "page-header");

    const backToSafety = link("Back to homepage", '/');
    const template = `
    <main class="page-not-found">    
        <h2>Page Not Found</h2>    
        <p>404 page not found</p>    
    </main>    
    `;
    const pageContent = makeElement(template)
    pageContent.append(backToSafety)
    page.append(header);
    page.append(pageContent)


    return page

}

export default notFound;
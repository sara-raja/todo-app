import heading from '../components/ui/header';
import link from '../components/ui/link';
import tagline from '../components/ui/tagline';
import makeElement from "./../utils/makeElement";

const notFound = function(){

    const page = document.createElement('div');
    const backToSafety = link("Back to homepage", '/');
    const template = `
    <header class="ui-header">    
    <h1>Page Not Found</h1>    
    <p>404 page not found</p>    
    </header>    
    `;
    const pageHeader = makeElement(template)
    pageHeader.append(backToSafety)
    page.append(pageHeader)

    return page

}

export default notFound;
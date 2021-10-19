import makeElement from "../../utils/makeElement";
import router from "../../routes/router";

const onRequestNewPage = function(e){
    e.preventDefault();
    router(e.currentTarget.dataset.path);
    return false;
}

const link = function (label="uiLink", path='/', className="ui-link"){
    const template = `<a href="${path}" data-path="${path}" class="${className}">${label}</a>`;
    const element = makeElement(template);
    element.addEventListener('click', onRequestNewPage)
    // console.log(element.nodeType);

    return element;
}
export default link;
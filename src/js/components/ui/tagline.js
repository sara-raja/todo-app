import makeElement from "../../utils/makeElement";

const tagline = function (title="uiTagline", className="ui-tagline"){
    const template = `<p class="${className}">${title}</p`;
    const element = makeElement(template);
    
    return element;
}

export default tagline;
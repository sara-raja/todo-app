import makeElement from "../../utils/makeElement";

const heading = function (elementType="h2", title="uiHeading", className="ui-heading"){
    const template = `<${elementType} class="${className}">${title}</${elementType}`;
    const element = makeElement(template);
    
    return element;
}

export default heading;
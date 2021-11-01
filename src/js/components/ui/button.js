import makeElement from "../../utils/makeElement";

const button = function (label="uiButton", className="ui-button"){
    const template = `<div class="${className}"><button>${label}</button></div>`;
    const element = makeElement(template);

    return element;
}

export default button;
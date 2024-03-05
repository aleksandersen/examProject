function loadTemplate(aTemplateID, aDestinationElement, aEmptyElement = false) {
  const template = document.getElementById(aTemplateID);
  if (template.content) {
    const clone = template.content.cloneNode();
    if(aEmptyElement){
        emptyContainerElement(aDestinationElement)
    }
    aDestinationElement.appendChild(clone)
  } else {
    console.log("Your browser doesn't support templates");
  }
}


function emptyContainerElement(aElement){
    let child = aElement.firstChild;
while(child){ //denne blir satt til true hvis det er barn igjen
    aElement.removeChild(child)
    let child = aElement.firstChild()

}
}

//



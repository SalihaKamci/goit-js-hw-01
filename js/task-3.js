function getElementWidth (content,padding,border ){
    const message= Number.parseFloat(content)+(2*Number.parseFloat(padding))+(2*Number.parseFloat(border));
    return console.log(message);

}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");


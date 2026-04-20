function getElementWidth(content, padding, border) {

    const contentBoxSize = parseFloat(content);
    const paddingSize = parseFloat(padding);
    const borderSize = parseFloat(border);

    return contentBoxSize + paddingSize * 2 + borderSize * 2;


}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

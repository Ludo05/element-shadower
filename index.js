function elementShadow(options){
    let element = document.querySelectorAll('.element-shadow')

    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px'
    } else {
        options.shadow_type = '15px'
    }

    element.forEach( elem => {
        elem.style.boxShadow = `10px 10px ${options.shadow_type} 10px rgba(10, 10, 10, 0.3)`

        if(options.padding === true){
            elem.style.padding = '1em';
        }
    })
}

module.exports.elementshadower = elementShadow;

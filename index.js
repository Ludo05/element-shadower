function elementShadow(options){
    let element = document.querySelectorAll('.element-shadow')

    if(options.shadow_type === 'hard'){
        options.shadow_type = '0px'
    } else {
        options.shadow_type = '15px'
    }

    element.forEach( elem => {
        elem.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0, 0, 0, 0, 0.12)`

        if(options.padding === true){
            elem.style.padding = '1em';
        }
    })
}

module.exports.elementshadower = elementShadow;

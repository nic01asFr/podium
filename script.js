const riseUpPodium = (idElement, height, hValue, sValue, lValue, aValue) => {
    const startCase = document.getElementById(idElement);
    for(i=1; i < height+1; i++){
        if(i == height-1){
            startCase.insertAdjacentHTML('afterEnd', `
            <div class="model" style= "transform: perspective(${100+i*5.5}vh) rotateX(${80-(0.001*i)}deg) translateZ(${i*0.1}vh);
                                    transform-style: preserve-3d;
                                    background: radial-gradient(circle at 90%, hsla(${hValue}deg, 90%, 90%, 0.5) 0% 15%, hsla( ${hValue}deg, ${sValue}%, ${lValue}%, ${aValue})  90% 100%);
                                    z-index: ${i}; " 
            ></div>`);
        } else {
            startCase.insertAdjacentHTML('afterEnd', `
            <div class="model" style= "transform: perspective(${100+i*5.5}vh) rotateX(${80-(0.001*i)}deg) translateZ(${i*0.1}vh);
                                    transform-style: preserve-3d;
                                    background: hsla( ${hValue}deg, ${sValue}%, ${20+((lValue/height)*i)}%, ${aValue}); 
                                    z-index: ${i}; " 
            ></div>`);
        }
    }
};

// 1st hsl(46, 80%, 54%)
// 2nd hsl(46, 51%, 85%)
// 3rd hsl(28, 84%, 67%)
// place = ['idOfRootElement', numberOfCreatedDiv(1 div each 0.1vh up), hueDegree, saturation%, lightness%, alphaRate]
const places = [['modelBottom1', 250, 46, 80, 54, 0.89],
                ['modelBottom2', 200, 46, 20, 65, 0.99],
                ['modelBottom3', 170, 28, 74, 57, 0.99]];

places.forEach(place => {
    riseUpPodium.apply(this, place);
})
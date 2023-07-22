var de = document.querySelector("#de");
var para = document.querySelector(".para");
var quantidade = document.querySelector(".qntd");

var res = document.querySelector("#res");

var botao = document.getElementById('botao');
    botao.addEventListener('click',function(){
        var selectDe = document.getElementById('de').value;
        var selectPara = document.getElementById('para').value;

        console.log(selectDe,selectPara);
        // if(selectDe === "m" && selectPara === "mm"){
        //     res.innerHTML = `você escolheu metros para milimetros Resultado: ${quantidade.value * 100} mm`
        // }else{
        //  res.innerHTML = "Ops algo deu errado"
        // }

      switch(selectDe == "m" && selectPara) {
         case "mm":
             res.innerHTML = `<p>Resultado: <br><br> ${quantidade.value * 1000 } mm</p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 1000 } ${selectPara} </p>`
             break
         case "cm":    
             res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 100 } cm </p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 100 } ${selectPara} </p>`
             break
         case "in":
             res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 39.3700787 } in </p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 39.3700787 } ${selectPara} </p> `
             break
         case "mi":
             res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 0.000621371192 } mi</p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.000621371192 } ${selectPara}</p>`
             break
         case "yd":
             res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 1.0936133} yd </p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 1.0936133 } ${selectPara} </p>`
             break
         case "km":
             res.innerHTML = `<p>Resultado:<br><br>${quantidade.value / 1000 }km </p>
             <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 1000 } ${selectPara}</p>` 
             break  
             

         
      }
      switch(selectDe == "mm" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value / 1000 }m </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 1000 } ${selectPara}</p>` 
            break
        case "cm":    
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value / 10 } cm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 10 } ${selectPara}</p>` 
            break
        case "in":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 0.0393700787 } in </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0393700787 } ${selectPara}</p>`
            break
        case "mi":
            res.innerHTML = `<p>Resultado: <br><br> ${quantidade.value / 1609344 } mi </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 1609344 } ${selectPara} </p>`
            break
        case "yd":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 0.0010936133 } yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0010936133  } ${selectPara}</p>`
            break
        case "km":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value / 1000000 }km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 1000000 } ${selectPara}</p>` 
            break
        
      }   

      switch(selectDe == "cm" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value / 100 }m  </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 100 } ${selectPara}</p>`
            break
        case "mm":    
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 10 } mm  </p>
            <p class="res-inner"> ${ quantidade.value} ${selectDe} equivalem a ${quantidade.value * 10 } ${selectPara}</p>`
            break
        case "in":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 0.0393700787 } in </p> 
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0393700787 } ${selectPara}</p>`
            break
        case "mi":
            res.innerHTML = `<p>Resultado: <br><br>${quantidade.value * 0.0006213712 } mi </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0006213712 } ${selectPara}</p>`
            break
        case "yd":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 0.010936133 } yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 0.010936133  } ${selectPara}</p>`
            break
        case "km":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value / 100000 }km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  / 100000 } ${selectPara}</p>`
            break
        
      }   

      switch(selectDe == "in" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 0.0254 }m </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0254 } ${selectPara}</p>`
            break
        case "mm":    
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 25.4 } mm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 25.4 } ${selectPara}</p>`
            break
        case "cm":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 2.54 } cm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 2.54 } ${selectPara}</p>`
            break
        case "mi":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value / 63360} mi </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  / 63360 } ${selectPara}</p>`
            break
        case "yd":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value / 36 } yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  / 36} ${selectPara}</p>`
            break
        case "km":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 0.0000254}km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 0.0000254 } ${selectPara}</p>`
            break
        
      }   

      switch(selectDe == "mi" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 1609.344 }m </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 1609.344 } ${selectPara}</p>`
            break
        case "mm":    
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 1609344 } mm  </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 1609344 } ${selectPara}</p>`
            break
        case "cm":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 160934.4 } cm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 160934.4 } ${selectPara}</p>`
            break
        case "in":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 63360} in </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 63360 } ${selectPara}</p>`
            break
        case "yd":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 1760} yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 1760 } ${selectPara}</p>`
            break
        case "km":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 1.609344}km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 1.609344 } ${selectPara}</p>` 
            break
        
      }   

      switch(selectDe == "yd" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 0.9144 }m </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 0.9144 } ${selectPara}</p>`
            break
        case "mm":    
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 914.4 } mm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 914.4  } ${selectPara}</p>`
            break
        case "cm":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 91.44 } cm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 91.44 } ${selectPara}</p>`
            break
        case "in":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 36} in</p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 36 } ${selectPara}</p>`
            break
        case "mi":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value / 1760} yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value / 1760 } ${selectPara}</p>`
            break
        case "km":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 0.0009144}km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 0.0009144 } ${selectPara}</p>`
            break
        
      } 

      switch(selectDe == "km" && selectPara) {
        case "m":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 1000 }m </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value * 1000 } ${selectPara}</p>`
            break
        case "mm":    
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 1000000 } mm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 1000000 } ${selectPara}</p>`
            break
        case "cm":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value *  100000 } cm </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  *  100000  } ${selectPara}</p>`
            break
        case "in":
            res.innerHTML = `<p>Resultado:<br><br> ${quantidade.value * 39370.0787} in </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 39370.0787 } ${selectPara}</p>`
            break
        case "mi":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 0.621371192} yd </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value   * 0.621371192 } ${selectPara}</p>`
            break
        case "yd":
            res.innerHTML = `<p>Resultado:<br><br>${quantidade.value * 1093.6133}km </p>
            <p class="res-inner"> ${quantidade.value} ${selectDe} equivalem a ${quantidade.value  * 1093.613 } ${selectPara}</p>` 
            break
        
      } 
    })






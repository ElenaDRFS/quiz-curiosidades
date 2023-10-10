// recoger formulario en constante

const quiz = document.getElementById('quiz');

// le quitamos el por defecto
quiz.addEventListener('submit', function(event){
    event.preventDefault(); 
    



// guardamos en variables cada respuesta y validaciones


const cerdo = event.target.cerdo.value; 
const llave = event.target.llave.value;
const animal = event.target.animal.value;
const batman = event.target.batman.value;
const peach = event.target.peach.value;
const millonario = event.target.millonario.value;
const cocacola = event.target.cocacola.value;
const monos = event.target.monos.value;
const queso = event.target.queso.value;
const erizo = event.target.erizo.value;

//validaciones

if(cerdo !== '36'){
    document.getElementById('correct-one').style.backgroundColor = '#91CB3E';
    document.getElementById('one').style.color = 'red';

    } else if (cerdo === '36'){
    document.getElementById('correct-one').style.backgroundColor = '#91CB3E';
    document.getElementById('one').style.color = '#91CB3E';
   
}


if(llave !== '13/14'){
    document.getElementById('correct-two').style.backgroundColor = '#91CB3E';
    document.getElementById('two').style.color = 'red';
    } else if (llave === '13/14'){
    document.getElementById('correct-two').style.backgroundColor = '#91CB3E';
    document.getElementById('two').style.color = '#91CB3E';
   
}

if(animal !== 'comepiedras'){
    document.getElementById('correct-three').style.backgroundColor = '#91CB3E';
    document.getElementById('three').style.color = 'red';

    } else if (animal === 'comepiedras'){
    document.getElementById('correct-three').style.backgroundColor = '#91CB3E';
    document.getElementById('three').style.color = '#91CB3E';
   
}


if(batman !== 'sube'){
    document.getElementById('correct-four').style.backgroundColor = '#91CB3E';
    document.getElementById('four').style.color = 'red';

    } else if (batman === 'sube'){
    document.getElementById('correct-four').style.backgroundColor = '#91CB3E';
    document.getElementById('four').style.color = '#91CB3E';
   
}


if(peach !== 'melocotones'){
    document.getElementById('correct-five').style.backgroundColor = '#91CB3E';
    document.getElementById('five').style.color = 'red';

} else if (peach === 'melocotones'){
    document.getElementById('correct-five').style.backgroundColor = '#91CB3E';
    document.getElementById('five').style.color = '#91CB3E';
   
}



if(millonario !== 'yo'){
    document.getElementById('correct-six').style.backgroundColor = '#91CB3E';
    document.getElementById('six').style.color = 'red';

} else if (millonario === 'yo'){
    document.getElementById('correct-six').style.backgroundColor = '#91CB3E';
    document.getElementById('six').style.color = '#91CB3E';
   
}

if(cocacola !== 'cubacorea'){
    document.getElementById('correct-seven').style.backgroundColor = '#91CB3E';
    document.getElementById('seven').style.color = 'red';

} else if (cocacola === 'cubacorea'){
    document.getElementById('correct-seven').style.backgroundColor = '#91CB3E';
    document.getElementById('seven').style.color = '#91CB3E';
   
}

if(monos !== 'monos'){
    document.getElementById('correct-eight').style.backgroundColor = '#91CB3E';
    document.getElementById('eight').style.color = 'red';

} else if (monos === 'monos'){
    document.getElementById('correct-eight').style.backgroundColor = '#91CB3E';
    document.getElementById('eight').style.color = '#91CB3E';
   
}

if(queso !== 'carrera'){
    document.getElementById('correct-nine').style.backgroundColor = '#91CB3E';
    document.getElementById('nine').style.color = 'red';

} else if (queso === 'carrera'){
    document.getElementById('correct-nine').style.backgroundColor = '#91CB3E';
    document.getElementById('nine').style.color = '#91CB3E';
   
}

if(erizo !== '300'){
    document.getElementById('correct-ten').style.backgroundColor = '#91CB3E';
    document.getElementById('ten').style.color = 'red';

} else if (erizo === '300'){
    document.getElementById('correct-ten').style.backgroundColor = '#91CB3E';
    document.getElementById('ten').style.color = '#91CB3E';
   
}




});

document.getElementById("reset").addEventListener("click", function(){
    location.reload()
});


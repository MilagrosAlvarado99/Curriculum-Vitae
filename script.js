let boton = document.getElementById('btn').addEventListener('click' , abrir);
let boton1 = document.getElementById('btn1').addEventListener('click', abrir);
function abrir() {
  if (this.id == 'btn') {
    document.getElementById('mostrar').style.display = "block";
  } else { if (this.id == 'btn1') {
    document.getElementById('mostrar1').style.display = "block";
    }
}
}
let icono1 = document.getElementById('X1').addEventListener('click' , cerrar);
let  icono2 = document.getElementById('X2').addEventListener('click', cerrar);
function cerrar() {
  if (this.id == 'X1') {
    document.getElementById('mostrar').style.display = "none";
  } else { if (this.id == 'X2') {
    document.getElementById('mostrar1').style.display = "none";
    }
}
}


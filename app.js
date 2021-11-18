abrirpopup=document.getElementById('windowEmergente');
var overley=document.getElementById('overley');
var popup=document.getElementById('popup');
var closepopup=document.getElementById('closepopup');
var registro=document.getElementById('registro')

abrirpopup.addEventListener('click', function(){
  overley.classList.add('active');//add le da la clase al popup
  popup.classList.add('active');
})

closepopup.addEventListener('click', function(){
  overley.classList.remove('active');//remove le quita la clase al popup
  popup.classList.remove('active');
})

var arrayGuardar = [];

function registrar(){
  var nombre= document.getElementById('nameUsuario').value;
  var mail= document.getElementById('mail').value;
  var password= document.getElementById('contra').value;
  if(nombre == ''){
    alert("Es necesario completar tu nombre");
    return false;
  }else if (mail== ''){
    alert("Es necesario completar tu email");
    return false;
  } else if (password== ''){
      alert("Es necesario completar tu contraseña");
      return false;
  }else{
    overley.classList.remove('active');
    nombre= arrayGuardar.push(document.getElementById('nameUsuario').value);
    mail= arrayGuardar.push(document.getElementById('mail').value);
    password= arrayGuardar.push(document.getElementById('contra').value);
  }  
}

console.log(arrayGuardar)

var iniciar=document.getElementById('iniciar');
var adentro=document.getElementById('adentro');
var ingreso = [];

function go(){
  var eUsuario= ingreso.push(document.getElementById('pri').value);
  var pUsuario= ingreso.push(document.getElementById('segu').value);
  if (eUsuario=''){
    alert("Ingrese su correo");
    return false;
  }else if(pUsuario=''){
    alert("Ingrese su contraseña");
    return false;
  }else{
  if(arrayGuardar[1]==ingreso[0] && arrayGuardar[2]==ingreso[1]){
    alert('cooorreecto')
  }else{
    alert('Usuario o contraseña incorrecta')
  }
  }}

console.log(ingreso)
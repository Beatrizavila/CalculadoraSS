if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => console.log('Registro de SW exitoso', reg))
    .catch((err) => console.warn('Error al tratar de registrar el sw', err));
}

var operandoa;
var operandob;
var operacion;

function init() {
  var resultado = document.getElementById('resultado');
  var memoria = document.getElementById('memoriadisplay');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var agregarm = document.getElementById('agregarmemoria');
  var traerm = document.getElementById('traermemoria');
  var limpiarm = document.getElementById('limpiarmemoria');

  uno.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '1';
  };
  dos.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '2';
  };
  tres.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '3';
  };
  cuatro.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '4';
  };
  cinco.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '5';
  };
  seis.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '6';
  };
  siete.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '7';
  };
  ocho.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '8';
  };
  nueve.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '9';
  };
  cero.onclick = function (e) {
    if (resultado.value == 0) {
      limpiar();
    }
    resultado.value = resultado.value + '0';
  };
  punto.onclick = function (e) {
    resultado.value = resultado.value + '.';
  };
  suma.onclick = function (e) {
    resultado.value = resultado.value + '+';
  };
  resta.onclick = function (e) {
    resultado.value = resultado.value + '-';
  };
  multiplicacion.onclick = function (e) {
    resultado.value = resultado.value + '*';
  };
  division.onclick = function (e) {
    resultado.value = resultado.value + '/';
  };
  reset.onclick = function (e) {
    resetear();
  };
  igual.onclick = function (e) {
    resultado.value = eval(resultado.value);
  };
  agregarm.onclick = function (e) {
    resultado.value = eval(resultado.value);
    memoria.value = eval(resultado.value);
  };
  traerm.onclick = function (e) {
    if (memoria.value === 'M') {
    } else {
      resultado.value = resultado.value + memoria.value;
    }
  };
  limpiarm.onclick = function (e) {
    memoria.value = 'M';
  };
}

function limpiar() {
  resultado.value = '';
}

function resetear() {
  resultado.value = '';
  operandoa = 0;
  operandob = 0;
  operacion = '';
}

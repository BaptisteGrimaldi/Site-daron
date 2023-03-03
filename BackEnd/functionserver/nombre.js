

function plusGrandNombre(tableau) {
    var max = Number(tableau[0]);
    for (var i = 1; i < tableau.length; i++) {
      var nombre = Number(tableau[i]);
      if (nombre > max) {
        max = nombre;
      }
    }
    return max;
  }

  function plusPetitNombre(tableau) {
    var min = Number(tableau[0]);
    for (var i = 1; i < tableau.length; i++) {
      var nombre = Number(tableau[i]);
      if (nombre < min) {
        min = nombre;
      }
    }
    return min;
  }
  
  module.exports = {
    plusGrandNombre: plusGrandNombre,
    plusPetitNombre: plusPetitNombre
  };